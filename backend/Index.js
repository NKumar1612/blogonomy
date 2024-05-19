const express      = require('express');
const cors         = require('cors');
const mongoose     = require('mongoose');
const User         = require('./models/User');
const Post        = require('./models/Post');
const bcrypt       = require('bcryptjs');
const jwt          = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer       = require('multer');
const fs           = require('fs');


const uploadMiddleware = multer({ dest: 'uploads/' })
const salt = bcrypt.genSaltSync(10);
const secret = 'jsgakjsdahs';

const app = express();

app.use(cors({credentials:true, origin:'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname+'/uploads'))

mongoose.connect('mongodb+srv://nkumar07nk:JKFJAxY20ydJpyoV@blogonomy.qhscmkr.mongodb.net/?retryWrites=true&w=majority&appName=Blogonomy');

// CORS configuration
const allowedOrigins = [
    'https://blogonomy.onrender.com',
    'https://blogonomy-1.onrender.com/', 
    'https://blogonomy.social',
    'https://www.blogonomy.onrender.com',
    'https://www.blogonomy-1.onrender.com/', 
    'https://www.blogonomy.social/'
  ];
  
  const corsOptions = {
    origin: 'https://blogonomy.social',
    credentials: true // Allow cookies to be sent from frontend to backend
  };
  app.use(cors(corsOptions));
  
  // Middleware
  app.use(express.json());
  app.use(cookieParser());
  app.use('/uploads', express.static(__dirname + '/uploads'));
  


app.post('/register', async (req, res) => {
    const {username,password} = req.body;

    try{
        const userDoc = await User.create({ 
            username, 
            password: bcrypt.hashSync(password,salt) 
        });
        res.json(userDoc);
    } catch(e) {
        res.status(400).json(e);
    }
    
});

app.post('/login', async (req, res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk){
        //login
        jwt.sign({ username, id:userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token' , token).json({
                id: userDoc._id,
                username,

            });
        })

    } else{
        res.status(400).json('wrong credentials.')
    }
})

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ error: 'JWT must be provided' });
    }

    jwt.verify(token, secret, {}, (err, info) => {
        if (err) {
            console.error('JWT verification failed:', err);
            return res.status(401).json({ error: 'Invalid JWT' });
        }
        res.json(info);
    });
});

app.post('/logout', (req,res) => {
    res.cookie('token','').json('ok');
});

app.post('/post', uploadMiddleware.single('file'), async (req,res) => {
    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path+'.'+ext;
    fs.renameSync(path, newPath);
  
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err,info) => {
      if (err) throw err;
      const {title,summary,content} = req.body;
      const postDoc = await Post.create({
        title,
        summary,
        content,
        cover:newPath,
        author:info.id,
      });
      res.json(postDoc);
    });
  
  });
  
  app.put('/post', uploadMiddleware.single('file'), async (req, res) => {
    let newPath = null;
    if (req.file) {
        const { originalname, path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
    }

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err;
        const { id, title, summary, content } = req.body;
        
        // Fetch the post document
        const postDoc = await Post.findById(id);
        if (!postDoc) {
            return res.status(404).json('Post not found');
        }

        // Check if the user is the author before updating
        const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
        if (!isAuthor) {
            return res.status(400).json('You are not the author');
        }

        // Update the post document
        postDoc.title = title;
        postDoc.summary = summary;
        postDoc.content = content;
        postDoc.cover = newPath ? newPath : postDoc.cover;
        await postDoc.save();

        res.json(postDoc);
    });
});
  
  
app.get('/post', async (req,res) => {

    res.json( await Post.find()
    .populate('author', ['username'])
    .sort({createdAt: -1})
    .limit(20)
    
    );
})

app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
})

app.listen(10000);