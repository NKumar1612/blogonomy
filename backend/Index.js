const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');
const https = require('https');

const uploadMiddleware = multer({ dest: 'uploads/' });
const salt = bcrypt.genSaltSync(10);
const secret = 'jsgakjsdahs';

const app = express();

app.use(cors({
    credentials: true,
    origin: [
        'https://blogonomy.social',
        'https://blogonomy.onrender.com',
        'https://blogonomy-1.onrender.com'
    ],
}));

app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://nkumar07nk:JKFJAxY20ydJpyoV@blogonomy.qhscmkr.mongodb.net/?retryWrites=true&w=majority&appName=Blogonomy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        });
        res.json(userDoc);
    } catch (e) {
        console.error('Error during registration:', e);
        res.status(400).json(e);
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.findOne({ username });
        if (!userDoc) {
            return res.status(400).json('User not found');
        }
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
                if (err) {
                    console.error('JWT sign error:', err);
                    return res.status(500).json('Internal server error');
                }
                res.cookie('token', token).json({
                    id: userDoc._id,
                    username,
                });
            });
        } else {
            res.status(400).json('Wrong credentials');
        }
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json('Internal server error');
    }
});

app.get('/profile', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ isLoggedIn: false });
    }
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) {
            console.error('JWT verification failed:', err);
            return res.status(401).json({ error: 'Invalid JWT', isLoggedIn: false });
        }
        res.json({ ...info, isLoggedIn: true });
    });
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
});

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
  
    console.log('Cookies:', req.cookies);
  
    const { token } = req.cookies;
    if (!token) {
      console.error('No token provided');
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }
  
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) {
        console.error('JWT verification failed:', err);
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
      }
  
      const { title, summary, content } = req.body;
      try {
        const postDoc = await Post.create({
          title,
          summary,
          content,
          cover: newPath,
          author: info.id,
        });
        res.json(postDoc);
      } catch (err) {
        console.error('Error creating post:', err);
        res.status(500).json({ error: 'Error creating post' });
      }
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
        if (err) {
            console.error('JWT verification failed:', err);
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }
        const { id, title, summary, content } = req.body;
        try {
            const postDoc = await Post.findById(id);
            if (!postDoc) {
                return res.status(404).json('Post not found');
            }
            const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
            if (!isAuthor) {
                return res.status(400).json('You are not the author');
            }
            postDoc.title = title;
            postDoc.summary = summary;
            postDoc.content = content;
            postDoc.cover = newPath ? newPath : postDoc.cover;
            await postDoc.save();
            res.json(postDoc);
        } catch (err) {
            console.error('Error updating post:', err);
            res.status(500).json({ error: 'Error updating post' });
        }
    });
});

app.get('/post', async (req, res) => {
    try {
        const posts = await Post.find()
            .populate('author', ['username'])
            .sort({ createdAt: -1 })
            .limit(20);
        res.json(posts);
    } catch (err) {
        console.error('Error fetching posts:', err);
        res.status(500).json({ error: 'Error fetching posts' });
    }
});

app.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const postDoc = await Post.findById(id).populate('author', ['username']);
        if (!postDoc) {
            return res.status(404).json('Post not found');
        }
        res.json(postDoc);
    } catch (err) {
        console.error('Error fetching post:', err);
        res.status(500).json({ error: 'Error fetching post' });
    }
});

exports.handler = async (event, context) => {
    const url = 'https://blogonomy.onrender.com';
    return new Promise((resolve, reject) => {
        const req = https.get(url, (res) => {
            if (res.statusCode === 200) {
                resolve({
                    statusCode: 200,
                    body: 'Server pinged successfully',
                });
            } else {
                reject(
                    new Error(`Server ping failed with status code: ${res.statusCode}`)
                );
            }
        });
        req.on('error', (error) => {
            reject(error);
        });
        req.end();
    });
};

app.listen(10000, () => {
    console.log('Server is running on port 10000');
});
