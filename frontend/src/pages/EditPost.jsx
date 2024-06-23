import React, { useEffect, useState } from 'react';
import {Navigate, useParams} from 'react-router-dom';
import { Editor } from '../component/Editor';


export const EditPost = () => {

    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch('https://blogonomy.onrender.com/post/'+id)
          .then(response => {
            response.json().then(postInfo => {
              setTitle(postInfo.title);
              setContent(postInfo.content);
              setSummary(postInfo.summary);
            });
          });
      }, []);

      async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if (files?.[0]) {
          data.set('file', files?.[0]);
        }
        const response = await fetch('https://blogonomy.onrender.com/post', {
          method: 'PUT',
          body: data,
          
        });
        if (response.ok) {
           setRedirect(true);
        }
      }
    
    if (redirect) {
        return <Navigate to={'/post/'+id} />
    }

    return (

      <form 
      onSubmit={updatePost} 
      className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12 bg-soft-white rounded-lg shadow-md space-y-6 mt-12 sm:mt-16"> 

      <h1 className="text-3xl sm:text-4xl font-playfair font-bold text-center text-deep-burgundy mb-4">
        Update Post
      </h1>
    
      <div className="flex flex-col">
        <label htmlFor="title" className="text-base font-lato text-neutral-gray mb-2">Title</label>
        <input 
          type="text" 
          id="title" 
          placeholder="Enter your updated title" 
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          className="border rounded-md p-3 bg-soft-white focus:outline-none focus:ring-2 focus:ring-coral"
        />
      </div>
    
      <div className="flex flex-col">
        <label htmlFor="summary" className="text-base font-lato text-neutral-gray mb-2">Summary</label>
        <textarea 
          id="summary" 
          placeholder="Update your summary"
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
          className="border rounded-md p-3 bg-soft-white focus:outline-none focus:ring-2 focus:ring-coral h-24 resize-y"
        />
      </div>
    
      <div className="flex flex-col">
        <label htmlFor="file" className="text-base font-lato text-neutral-gray mb-2">Cover Image (Optional)</label>
        <input 
          type="file" 
          id="file"
          onChange={(ev) => setFiles(ev.target.files)}
          className="border rounded-md p-2 bg-soft-white file:bg-dark-olive-green file:text-soft-white file:rounded-md file:border-0 file:px-4 file:py-2 file:cursor-pointer hover:file:bg-darker-mint-green" 
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="content" className="text-base font-lato text-neutral-gray mb-2">Content</label>
        <Editor
          id="content"
          value={content}
          onChange={setContent}
          className="border rounded-md p-4 bg-soft-white focus:outline-none focus:ring-2 focus:ring-coral min-h-[300px]"
        />
      </div>

      <button 
        className="bg-darker-mint-green hover:bg-muted-mint-green text-soft-white font-barlow py-3 px-6 rounded-md text-base mt-4 w-full md:w-auto"
      >
        Update Post
      </button>
    </form>
    
  );
};
