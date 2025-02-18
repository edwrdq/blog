import Link from "next/link";
import Image from "next/image";
import Particles from "../components/Particles";

export default function Contact() {
  return (
    <div
      className="relative min-h-screen p-8"
      style={{ backgroundColor: "#282828", color: "#ebdbb2" }}
    >
      {/* Back Button */}
      <nav className="mb-8">
        <Link
          href="/"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#ebdbb2] text-[#282828] gap-2 hover:bg-[#d5c4a1] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 5a1 1 0 00-1 1v3H6a1 1 0 000 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V6a1 1 0 00-1-1z"
            />
          </svg>
          <span>Back</span>
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Email</h2>
          <p className="text-lg">
            <a
              href="mailto:jonatan@dotmavriq.life"
              className="underline hover:text-orange-400 transition-colors"
            >
              JONATAN@DOTMAVRIQ.LIFE
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
            >
              <Image src="/github.svg" alt="GitHub" width={40} height={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/janssonjonatan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
            </a>
            <a
              href="https://www.youtube.com/@dotmavriq/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/youtube.svg" alt="YouTube" width={40} height={40} />
            </a>
            <a
              href="https://matrix.to/#/@dotmavriq:chat.dotmavriq.life"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/matrix.svg" alt="Matrix" width={40} height={40} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
