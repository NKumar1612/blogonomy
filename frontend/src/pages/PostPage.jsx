import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { formatISO9075 } from "date-fns";
import {UserContext} from "../UserContext";
import { SocialsShare } from '../component/SocialsShare';

export const PostPage = () => {

    const [postInfo, setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext);
    const id = useParams();
    const url = window.location.href;

    useEffect(() => {
        fetch(`https://blogonomy.onrender.com/post/${id.id}`)
            .then(response => response.json())
            .then(postInfo => {
                setPostInfo(postInfo);
            })
            .catch(error => {
                console.error('Error fetching post:', error);
            });
    }, [id]);

    if(!postInfo) return '';

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 ">
            <h1 className=" text-6xl mb-4 font-playfair italic">{postInfo.title}</h1>
            <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="mr-2">
                    {formatISO9075(new Date(postInfo.createdAt))}
                </span>
                <span className="mr-2 text-chery-red">by @{postInfo.author.username}</span>
                {userInfo.id === postInfo.author._id && (
                    <Link
                        to={`/edit/${postInfo._id}`}
                        className="bg-deep-teal p-1 rounded-md text-soft-white text-center w-20 hover:bg-teal"
                    >
                        Edit Post
                    </Link>
                )}
            </div>

            <SocialsShare url={url} />

            <img
                src={`http://localhost:4000/${postInfo.cover}`}
                alt={postInfo.title}
                className="mb-4"
            />
            <div
                className="prose max-w-none text-base text-deep-burgundy"
                dangerouslySetInnerHTML={{ __html: postInfo.content }}
            />
        </div>
    )
}