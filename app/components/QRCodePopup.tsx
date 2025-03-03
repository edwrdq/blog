"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type QRCodePopupProps = {
  onClose: () => void;
  isOpen: boolean;
};

export default function QRCodePopup({ onClose, isOpen }: QRCodePopupProps) {
  // Reference to the popup component
  const popupRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div 
        ref={popupRef}
        className="bg-[#282828] border-2 border-[#a89984] rounded-lg p-6 max-w-sm w-full m-4 relative"
        style={{ 
          boxShadow: '0 0 0 1px #7c6f64, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-[#ebdbb2] hover:text-[#fb4934] focus:outline-none"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* QR code content */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-[#ebdbb2] mb-4">Share the site!</h3>
          <div className="bg-white p-3 rounded-lg mb-4">
            <Image 
              src="/contact_qr.png" 
              alt="Contact QR Code" 
              width={250} 
              height={250} 
              className="rounded-sm"
            />
          </div>
          <p className="text-[#ebdbb2] text-sm text-center">
            Have your friend scan the QR to visit this site
          </p>
        </div>
      </div>
    </div>
  );
}