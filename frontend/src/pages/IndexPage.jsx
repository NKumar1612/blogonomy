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

      <section className="bg-light-lavender w-screen min-h-screen px-4 sm:px-10 py-20">
        <h1 className="text-4xl font-playfair text-deep-burgundy text-center mb-12">
          Trending Blogs right now:
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.length > 0 && posts.map((post) => (
            <Post key={post._id} {...post} />
          ))}
        </div>
      </section>

    </div>
  );
}
