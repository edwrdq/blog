"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamic import for QR code popup
const QRCodePopup = dynamic(() => import("./QRCodePopup"), { ssr: false });

export default function ContactCard() {
  const [isQROpen, setIsQROpen] = useState(false);
  
  // Shake detection setup
  useEffect(() => {
    let shakeEvent: any = null;
    
    // Only run on client and if DeviceMotionEvent is available
    if (typeof window !== 'undefined' && 'DeviceMotionEvent' in window) {
      try {
        // Try to import shake.js dynamically
        import('shake.js').then((shake) => {
          const Shake = shake.default;
          shakeEvent = new Shake({
            threshold: 15, // default 15
            timeout: 1000 // default 1000
          });
          
          shakeEvent.start();
          window.addEventListener('shake', handleShake, false);
        }).catch(err => {
          console.log('Shake detection not available:', err);
        });
      } catch (e) {
        console.log('Error initializing shake detection');
      }
    }
    
    return () => {
      if (shakeEvent) {
        window.removeEventListener('shake', handleShake, false);
        shakeEvent.stop();
      }
    };
  }, []);
  
  const handleShake = () => {
    setIsQROpen(true);
  };
  
  return (
    <div className="relative max-w-3xl w-full">
      {/* Card with folded corner */}
      <div className="bg-[#3c3836] p-8 rounded-lg shadow-2xl space-y-8 overflow-hidden">
        {/* Enhanced folded corner effect - absolutely positioned in the top-right */}
        <div 
          className="absolute top-0 right-0 z-20 w-20 h-20 cursor-pointer group transition-transform hover:scale-105"
          onClick={() => setIsQROpen(true)}
        >
          {/* Main folded corner */}
          <div 
            className="absolute top-0 right-0 w-0 h-0 border-t-[50px] border-r-[50px] border-t-[#a89984] border-r-[#a89984] transition-all duration-300 group-hover:border-t-[#bdae93] group-hover:border-r-[#bdae93]" 
            style={{ 
              filter: 'drop-shadow(-2px 2px 3px rgba(0,0,0,0.3))',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
            }}
          />
          
          {/* Inner fold shadow effect for depth */}
          <div 
            className="absolute top-0 right-0 w-20 h-20" 
            style={{
              background: 'linear-gradient(135deg, transparent 72%, rgba(0,0,0,0.2) 72%)',
              zIndex: 21,
            }}
          />
          
          {/* Underlying page color showing through */}
          <div 
            className="absolute top-0 right-0 w-0 h-0 border-t-[46px] border-r-[46px] border-t-[#504945] border-r-[#504945]" 
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
              zIndex: 19,
            }}
          />
          
          {/* Dog-ear hint (subtle lighter edge) */}
          <div 
            className="absolute top-[5px] right-[5px] w-0 h-0 border-t-[10px] border-r-[10px] border-t-[#d5c4a1] border-r-[#d5c4a1] opacity-30 group-hover:opacity-60 transition-opacity" 
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
              zIndex: 22,
            }}
          />
        </div>
        
        <header>
          <h1 className="text-4xl font-bold text-center">Contact</h1>
          <p className="text-center text-sm text-[#a89984] mt-1">Click the folded corner to scan QR code or shake your device</p>
        </header>
        <main className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Email</h2>
            <p className="text-lg">
              <a
                href="mailto:social@dotmavriq.life"
                className="underline hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors"
              >
                SOCIAL@DOTMAVRIQ.LIFE
              </a>
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Socials</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/dotMavriq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ebdbb2]"
              >
                <Image src="/github.svg" alt="GitHub" width={40} height={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/janssonjonatan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ebdbb2]"
              >
                <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
              </a>
              <a
                href="https://www.youtube.com/@dotMavriq/videos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ebdbb2]"
              >
                <Image src="/youtube.svg" alt="YouTube" width={40} height={40} />
              </a>
              <a
                href="https://matrix.to/#/@dotmavriq:chat.dotmavriq.life"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Matrix"
                className="transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ebdbb2]"
              >
                <Image src="/matrix.svg" alt="Matrix" width={40} height={40} />
              </a>
            </div>
          </section>
        </main>
      </div>
      
      {/* QR Code Popup */}
      <QRCodePopup 
        isOpen={isQROpen} 
        onClose={() => setIsQROpen(false)} 
      />
    </div>
  );
}