import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-background text-foreground">
      {/* Back Button */}
      <nav className="mb-8">
        <Link
          href="/"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
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

      {/* Blog Coming Soon */}
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-lg text-gray-400 mb-6">Coming soon... Stay tuned!</p>

      {/* Embedded YouTube Video */}
      <div className="w-full max-w-xl">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hB7CDrVnNCs?si=p_iJhBXDjjNPI-t3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-64 sm:h-80 md:h-96"
        ></iframe>
      </div>
    </div>
  );
}
