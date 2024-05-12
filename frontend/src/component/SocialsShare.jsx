import React from 'react'
import { TwitterShareButton, 
    EmailShareButton,
    FacebookShareButton, 
    RedditShareButton, 
    WhatsappShareButton, 
    EmailIcon, 
    FacebookIcon, 
    TwitterIcon, 
    WhatsappIcon, 
    RedditIcon} from 'react-share';

export const SocialsShare = ({ url }) => {

    if (!url) {
        console.error("URL prop is missing in ShareButtons component.");
        return null;
    }

    console.log("URL prop:", url);

   

    return (
        <div className='space-x-1'>
                <TwitterShareButton url={url}>
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>

                <EmailShareButton url={url}>
                    <EmailIcon size={32} round={true} />
                </EmailShareButton>
                <FacebookShareButton url={url}>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <RedditShareButton url={url}>
                    <RedditIcon size={32} round={true} />
                </RedditShareButton>
                <WhatsappShareButton url={url}>
                    <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
        </div>
    )
}
