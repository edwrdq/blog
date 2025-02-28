"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the animations with SSR disabled
const RoadAnimation = dynamic(() => import("./RoadAnimation"), { ssr: false });
const ParticleAnimation = dynamic(() => import("./ParticleAnimation"), { ssr: false });

interface LazyAnimationProps {
  type: "road" | "particle";
}

export default function LazyAnimation({ type }: LazyAnimationProps) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Only render on client-side to avoid hydration issues
  if (!isClient) return null;
  
  return type === "road" ? <RoadAnimation /> : <ParticleAnimation />;
}