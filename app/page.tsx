"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to fill the viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // ROAD EFFECT PARAMETERS (adjust these values as needed)
    const roadSpeed = 2; // Speed of the road movement (increase for faster effect)
    const segmentSpacing = 150; // Vertical spacing between checkered segments
    const roadWidthAtVP = 20; // Road width at the vanishing point (in pixels)
    const leftMargin = 0.2; // Left road edge at 20% of canvas width
    const rightMargin = 0.8; // Right road edge at 80% of canvas width

    // Create an array to hold vertical positions of checkered mid-line segments.
    // Each number represents the vertical offset from the bottom.
    const segments: number[] = [];
    for (let pos = 0; pos < canvas.height; pos += segmentSpacing) {
      segments.push(pos);
    }

    // The animation loop to draw the road perspective
    const animate = () => {
      // Clear canvas each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Define key positions for perspective:
      // Vanishing point (vp) is set at 40% of canvas height (adjust vp.y as desired)
      const vp = { x: canvas.width / 2, y: canvas.height * 0.4 };
      // Bottom left (bl) and bottom right (br) define where the road starts at the bottom
      const bl = { x: canvas.width * leftMargin, y: canvas.height };
      const br = { x: canvas.width * rightMargin, y: canvas.height };

      // Draw road edges (the lines converging toward the vanishing point)
      ctx.strokeStyle = "#555"; // Road edge color (grunge style)
      ctx.lineWidth = 3;

      // Left road edge: from bottom left to a point near the vanishing point
      ctx.beginPath();
      ctx.moveTo(bl.x, bl.y);
      ctx.lineTo(vp.x - roadWidthAtVP / 2, vp.y);
      ctx.stroke();

      // Right road edge: from bottom right to a point near the vanishing point
      ctx.beginPath();
      ctx.moveTo(br.x, br.y);
      ctx.lineTo(vp.x + roadWidthAtVP / 2, vp.y);
      ctx.stroke();

      // Draw the moving checkered mid-line segments along the center of the road.
      // REVERSED MOTION: Now segments move downward, simulating the GIF running TOWARDS the viewer.
      for (let i = 0; i < segments.length; i++) {
        // Update the segment's vertical position downward along the road.
        segments[i] += roadSpeed;
        if (segments[i] > canvas.height) {
          // When a segment moves past the bottom, wrap it to the top.
          segments[i] -= canvas.height;
        }

        // Calculate an interpolation factor "t" from bottom (t=0) to vanishing point (t=1)
        const t = segments[i] / canvas.height;
        // Interpolate the segment's position along the center line:
        // At t=0, position is at bottom center; at t=1, it's at the vanishing point.
        const xPos = (1 - t) * (canvas.width / 2) + t * vp.x;
        const yPos = (1 - t) * canvas.height + t * vp.y;

        // Adjust segment size for perspective (smaller near the vanishing point)
        const segmentWidth = 20 * (1 - t) + 5;
        const segmentHeight = 10 * (1 - t) + 2;

        // Alternate colors for a checkered effect (updated colors)
        ctx.fillStyle = i % 2 === 0 ? "#ebbdb2" : "#665c53";
        // Draw the segment as a rectangle centered at (xPos, yPos)
        ctx.fillRect(xPos - segmentWidth / 2, yPos - segmentHeight / 2, segmentWidth, segmentHeight);
      }

      // Optional: Add a subtle grunge overlay for texture (adjust alpha as needed)
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative flex flex-col h-full p-4 sm:p-8 md:p-16 bg-background text-foreground [font-family:var(--font-geist-sans)]">
      {/* Fixed canvas background with the road effect */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{ width: "100%", height: "100%", zIndex: 0 }}
      />

      {/* Main content area */}
      <div className="relative z-10 flex flex-col flex-grow items-center justify-center gap-8">
        {/* The centered ninja (or Solid Snake) GIF */}
        <img
          className="dark:invert"
          src="/solidsnakegbc.gif"
          alt="Solid Snake GBC"
          width={180}
          height={38}
        />

        {/* Social Icons */}
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
            href="https://www.youtube.com/@dotMavriq/videos"
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

        {/* Call-to-Action Buttons */}
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

        {/* Quick Links (first "footer") */}
        <div className="relative z-10 mt-4 flex flex-wrap items-center justify-center gap-6">
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
        </div>
      </div>
    </div>
  );
}
