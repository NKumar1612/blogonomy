import { Post } from "../component/Post";
import {useEffect, useState} from "react";
import {HeroPage} from '../component/HeroPage';

import React from 'react'

export const IndexPage = () => {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div className="" >
      <HeroPage/>
      <div className="py-6 flex flex-col items-center h-auto">
        <div className=" w-[700px] space-y-6">
          {posts.length > 0 && posts.map(post => (
            <Post key={post._id} {...post}/>
          ))}
        </div>
      </div>
    </div>
  );
}
