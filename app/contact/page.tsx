"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Contact() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // PARTICLE EFFECT PARAMETERS (same as main page)
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
    <div className="relative flex flex-col h-full p-4 sm:p-8 md:p-16 bg-[#282828] text-[#ebdbb2] [font-family:var(--font-geist-sans)]">
      {/* Fixed canvas background with particle effect */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{ width: "100%", height: "100%", zIndex: 0 }}
      />

      {/* Main content area */}
      <div className="relative z-10 flex flex-col flex-grow items-center justify-center">
        <div className="max-w-3xl w-full bg-[#3c3836] p-8 rounded-lg shadow-2xl space-y-8">
          <header>
            <h1 className="text-4xl font-bold text-center">Contact</h1>
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
      </div>
    </div>
  );
}
