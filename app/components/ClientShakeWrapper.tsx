"use client";

import dynamic from "next/dynamic";

// Dynamic import for shake detection
const GlobalShakeDetection = dynamic(() => import("./GlobalShakeDetection"), { 
  ssr: false
});

export default function ClientShakeWrapper() {
  return <GlobalShakeDetection />;
}