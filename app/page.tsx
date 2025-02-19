"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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
        // Draw square particle
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
    <div className="relative flex flex-col min-h-screen p-4 sm:p-8 md:p-16 bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      {/* Inline particle canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{ width: "100%", height: "100%", zIndex: 0 }}
      />

      <header className="mb-8">{/* Optional header or nav */}</header>

      <main className="relative z-10 flex flex-col items-center justify-center flex-grow gap-8">
        {/* Plain <img> for the GIF */}
        <img
          className="dark:invert"
          src="/solidsnakegbc.gif"
          alt="Solid Snake GBC"
          width={180}
          height={38}
        />

        {/* Social icons using plain <img> */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/dotMavriQ"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-75"
          >
            <img src="/github.svg" alt="GitHub" width={40} height={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/janssonjonatan/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-75"
          >
            <img src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
          </a>
          <a
            href="https://www.youtube.com/@dotmavriq/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-75"
          >
            <img src="/youtube.svg" alt="YouTube" width={40} height={40} />
          </a>
          <a
            href="https://matrix.to/#/@dotmavriq:chat.dotmavriq.life"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-75"
          >
            <img src="/matrix.svg" alt="Matrix" width={40} height={40} />
          </a>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/portfolio"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            View Portfolio
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/blog"
          >
            Read Blog
          </a>
        </div>
      </main>

      {/* Footer links also plain <img> */}
      <footer className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
        >
          <img aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          About Me
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/cv"
        >
          <img aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          My CV
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
        >
          <img aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Contact
        </a>
      </footer>
    </div>
  );
}
