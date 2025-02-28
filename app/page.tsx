import LazyAnimation from "./components/LazyAnimation";
import { Suspense } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col h-full p-4 sm:p-8 md:p-16 bg-background text-foreground [font-family:var(--font-geist-sans)]">
      {/* Fixed canvas background with the road effect */}
      <Suspense fallback={<div className="fixed inset-0 bg-background" />}>
        <LazyAnimation type="road" />
      </Suspense>

      {/* Main content area */}
      <div className="relative z-10 flex flex-col flex-grow items-center justify-center gap-8">
        {/* The centered ninja (or Solid Snake) GIF */}
        <Image
          className="dark:invert"
          src="/solidsnakegbc.gif"
          alt="Solid Snake GBC"
          width={180}
          height={38}
          priority
        />

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/dotMavriQ"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-75"
            aria-label="GitHub profile"
          >
            <Image src="/github.svg" alt="GitHub" width={40} height={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/janssonjonatan/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-75"
            aria-label="LinkedIn profile"
          >
            <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
          </a>
          <a
            href="https://www.youtube.com/@dotMavriq/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-75"
            aria-label="YouTube channel"
          >
            <Image src="/youtube.svg" alt="YouTube" width={40} height={40} />
          </a>
          <a
            href="https://matrix.to/#/@dotmavriq:chat.dotmavriq.life"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-75"
            aria-label="Matrix chat"
          >
            <Image src="/matrix.svg" alt="Matrix" width={40} height={40} />
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
              aria-hidden="true"
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
            <Image aria-hidden={true} src="/file.svg" alt="" width={16} height={16} />
            About Me
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/cv"
          >
            <Image aria-hidden={true} src="/globe.svg" alt="" width={16} height={16} />
            My CV
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/contact"
          >
            <Image aria-hidden={true} src="/window.svg" alt="" width={16} height={16} />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
