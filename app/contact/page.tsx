import Image from "next/image";
import LazyAnimation from "../components/LazyAnimation";
import { Suspense } from "react";

export default function Contact() {
  return (
    <div className="relative flex flex-col h-full p-4 sm:p-8 md:p-16 bg-[#282828] text-[#ebdbb2] [font-family:var(--font-geist-sans)]">
      {/* Fixed canvas background with particle effect */}
      <Suspense fallback={<div className="fixed inset-0 bg-[#282828]" />}>
        <LazyAnimation type="particle" />
      </Suspense>

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
