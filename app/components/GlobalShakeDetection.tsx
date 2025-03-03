"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic import for QR code popup
const QRCodePopup = dynamic(() => import("./QRCodePopup"), { ssr: false });

export default function GlobalShakeDetection() {
  const [isQROpen, setIsQROpen] = useState(false);
  
  // Shake detection setup
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let shakeInstance: any = null;
    
    // Only run on client and if DeviceMotionEvent is available
    if (typeof window !== 'undefined' && 'DeviceMotionEvent' in window) {
      try {
        // Try to import shake.js dynamically
        import('shake.js').then((shake) => {
          const Shake = shake.default;
          shakeInstance = new Shake({
            threshold: 15, // default 15
            timeout: 1000 // default 1000
          });
          
          shakeInstance.start();
          window.addEventListener('shake', handleShake, false);
        }).catch((error) => {
          console.log('Shake detection not available:', error);
        });
      } catch {
        console.log('Error initializing shake detection');
      }
    }
    
    // Cleanup function
    return () => {
      if (shakeInstance && typeof shakeInstance.stop === 'function') {
        window.removeEventListener('shake', handleShake, false);
        shakeInstance.stop();
      }
    };
  }, []);
  
  const handleShake = () => {
    setIsQROpen(true);
  };
  
  return (
    <>
      {/* QR Code Popup */}
      <QRCodePopup 
        isOpen={isQROpen} 
        onClose={() => setIsQROpen(false)} 
      />
    </>
  );
}