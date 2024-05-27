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

      <section className="bg-soft-white py-12 md:py-24"> {/* Added background color and padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
          <h1 className="text-3xl md:text-4xl font-playfair text-deep-burgundy text-center mb-8"> 
            Trending Blogs right now:
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 && posts.map((post) => (
              <Post key={post._id} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
