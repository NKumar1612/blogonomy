import React, { useState } from 'react';
import { Editor } from '../component/Editor';
import { Navigate } from 'react-router-dom';

export const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleSummaryChange = (event) => setSummary(event.target.value);
  const handleContentChange = (value) => setContent(value);

  async function createNewPost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);

    const response = await fetch('https://blogonomy.onrender.com/post', {
      method: 'POST',
      body: data,
      credentials: 'include', // Ensure cookies are sent
    });

    if (response.ok) {
      setRedirect(true);
    } else {
      console.error('Failed to create post:', response.status, response.statusText);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <form
      onSubmit={createNewPost}
      className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12 bg-soft-white rounded-lg shadow-md space-y-6 mt-12 sm:mt-16"
    >
      <h1 className="text-3xl sm:text-4xl font-playfair font-bold text-center text-deep-burgundy mb-4">
        Create New Post
      </h1>

      <div className="flex flex-col">
        <label htmlFor="title" className="text-base font-lato text-neutral-gray mb-2">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter your captivating title"
          value={title}
          onChange={handleTitleChange}
          className="border rounded-md p-3 bg-soft-white focus:outline-none focus:ring-2 focus:ring-coral"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="summary" className="text-base font-lato text-neutral-gray mb-2">Summary</label>
        <textarea
          id="summary"
          placeholder="Write a brief summary of your post"
          value={summary}
          onChange={handleSummaryChange}
          className="border rounded-md p-3 bg-soft-white focus:outline-none focus:ring-2 focus:ring-coral h-24 resize-y"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="file" className="text-base font-lato text-neutral-gray mb-2">Cover Image</label>
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
          onChange={handleContentChange}
          className="border rounded-md p-4 bg-soft-white focus:outline-none focus:ring-2 focus:ring-coral min-h-[300px]"
        />
      </div>

      <button
        className="bg-darker-mint-green hover:bg-muted-mint-green text-soft-white font-barlow py-3 px-6 rounded-md text-base mt-4"
      >
        Create Post
      </button>
    </form>
  );
};
