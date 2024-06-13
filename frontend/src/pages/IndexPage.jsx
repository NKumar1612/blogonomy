import { Post } from "../component/Post";
import {useEffect, useState} from "react";
import {HeroPage} from '../component/HeroPage';

import React from 'react'

export const IndexPage = () => {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('https://blogonomy.onrender.com/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div>
      <HeroPage />
      <section className="bg-light-lavender w-screen min-h-screen px-4 sm:px-10 py-10">
        <h1 className="text-3xl sm:text-5xl font-playfair text-deep-burgundy text-center mb-8">
          Trending Blogs right now:
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.length > 0 && posts.map((post) => (
            <Post key={post._id} {...post} />
          ))}
        </div>
      </section>
    </div>
  );
}
