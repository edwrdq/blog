"use client";

import { useEffect, useRef } from "react";

export default function ParticleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // PARTICLE EFFECT PARAMETERS
    const particles: {
      x: number;
      y: number;
      speed: number;
      size: number;
      opacity: number;
    }[] = [];
    const maxParticles = 80;
    const spawnChance = 0.05;
    const particleColor = "100,100,100";
    let animationFrameId: number;

    // Resize canvas to fill the viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const updateParticles = () => {
      if (particles.length < maxParticles && Math.random() < spawnChance) {
        particles.push({
          x: Math.random() * canvas.width,
          y: canvas.height,
          speed: 0.5 + Math.random() * 0.5,
          size: 4 + Math.random() * 4,
          opacity: 0.5 + Math.random() * 0.3,
        });
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y -= p.speed;
        p.opacity -= 0.0005;
        if (p.y < 0 || p.opacity <= 0) {
          particles.splice(i, 1);
        }
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity.toFixed(2)})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none"
      style={{ width: "100%", height: "100%", zIndex: 0 }}
    />
  );
}