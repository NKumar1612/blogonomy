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
    const formattedTime = postInfo.createdAt ? formatISO9075(new Date(postInfo.createdAt), { representation: 'time' }).slice(0, -3) : '';

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
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Title (Reduced size, adjusted margins) */}
            <h1 className="text-5xl md:text-6xl mb-4 font-playfair italic leading-tight text-deep-burgundy">
                {postInfo.title}
            </h1>

            {/* Social Share */}
            <SocialsShare url={url} />

            {/* Image (Added max-width for responsiveness) */}
            <img
                src={`https://blogonomy.onrender.com/${postInfo.cover}`}
                alt={postInfo.title}
                className="mb-6 rounded-lg shadow-md max-w-full"
            />

            {/* Metadata (Improved font size and spacing) */}
            <div className="flex items-center text-base text-neutral-gray mb-4 space-x-2">
                <span>
                {formatISO9075(new Date(formattedTime))}
                </span>
                <span className="text-chery-red">by @{postInfo.author.username}</span>
                {userInfo.id === postInfo.author._id && (
                <Link
                    to={`/edit/${postInfo._id}`}
                    className="bg-deep-teal py-2 px-4 rounded-md text-soft-white text-center hover:bg-teal transition-colors duration-300"
                >
                    Edit Post
                </Link>
                )}
            </div>

            {/* Content (Ensured text color is deep-burgundy) */}
            <div
                className="prose max-w-none text-base text-deep-burgundy" 
                dangerouslySetInnerHTML={{ __html: postInfo.content }}
            />
        </div>
)}