import React, { useState } from 'react';
import { Editor } from '../component/Editor';
import {Navigate} from 'react-router-dom';

export const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleSummaryChange = (event) => setSummary(event.target.value);
  const handleContentChange = (value) => setContent(value);

  async function createNewPost(ev){
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    ev.preventDefault();
    
    const response = await fetch('https://blogonomy.onrender.com/post', {
        method:'POST',
        body: data,
        credentials: 'include'
        
    });
    if (response.ok){
        setRedirect(true)
    } 
  }

  if(redirect){
    return <Navigate to={'/'} />
  }

  return (

    <form onSubmit={createNewPost} className='flex flex-col px-3 space-y-4'>
      <input
        type='title'
        placeholder={'Title'}
        value={title}
        onChange={ev => setTitle(ev.target.value)}
        className='border p-2 rounded-md bg-soft-white placeholder-neutral-gray'
      />

      <input
        type="summary"
        placeholder={'Summary'}
        value={summary}
        onChange={ev => setSummary(ev.target.value)}
        className='border p-2 rounded-md bg-soft-white placeholder-neutral-gray'
      />

      <input 
        type="file"
        onChange={ev => setFiles(ev.target.files)}
        className='border p-2 rounded-md bg-soft-white'
      />

      <Editor value={content} onChange={setContent} />

      <button className='bg-darker-mint-green p-2 rounded-md text-soft-white w-28 hover:bg-muted-mint-green mt-4'>Create Post</button>
    </form>

  );
};
