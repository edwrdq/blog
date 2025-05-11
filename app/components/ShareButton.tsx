'use client';

import { useState } from 'react';

interface ShareButtonProps {
  postTitle: string;
}

export default function ShareButton({ postTitle }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: postTitle,
        url: window.location.href,
      })
      .catch(err => {
        console.error('Could not share: ', err);
        fallbackCopyToClipboard();
      });
    } else {
      fallbackCopyToClipboard();
    }
  };
  
  const fallbackCopyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Could not copy: ', err);
      });
  };
  
  return (
    <button 
      className="px-4 py-2 bg-[#b8bb26] text-[#282828] rounded-md hover:bg-[#98971a] transition-colors flex items-center relative"
      onClick={handleShare}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 mr-1" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
      </svg>
      {copied ? 'Copied!' : 'Share'}
      
      {copied && (
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#3c3836] text-[#ebdbb2] px-2 py-1 rounded text-xs whitespace-nowrap">
          Link copied!
        </span>
      )}
    </button>
  );
}