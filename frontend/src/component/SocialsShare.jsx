import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TwitterShareButton, 
    FacebookShareButton, 
    RedditShareButton, 
    WhatsappShareButton,
    TwitterIcon, 
    FacebookIcon, 
    RedditIcon, 
    WhatsappIcon } from 'react-share';


export const SocialsShare = ({ url }) => {

    const [copied, setCopied] = useState(false);
    const currentUrl = window.location.href;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    };

    if (!url) {
        console.error("URL prop is missing in ShareButtons component.");
        return null;
    }

    console.log("URL prop:", url);

    return (
        <div className='flex space-x-3 items-center py-2 relative'> 
            <div className='absolute lg:top-[-7px] sm:top-[-10px] lg:left-[11.5rem] sm:left-[20rem] flex items-center'> 
                {copied && (
                <div className='text-deep-teal lg:text-xs sm:text-base'>Copied!</div>
                )}
            </div>
            
            <TwitterShareButton url={url}>
                <TwitterIcon className='lg:size-8 sm:size-16' round={true} />
            </TwitterShareButton>
            <FacebookShareButton url={url}>
                <FacebookIcon className='lg:size-8 sm:size-16' round={true}/>
            </FacebookShareButton>
            <RedditShareButton url={url}>
                <RedditIcon className='lg:size-8 sm:size-16' round={true} />
            </RedditShareButton>
            <WhatsappShareButton url={url}>
                <WhatsappIcon className='lg:size-8 sm:size-16' round={true}/>
            </WhatsappShareButton>
            <button onClick={copyToClipboard}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 lg:size-8 sm:size-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
            </button>
    </div>
    )
}
