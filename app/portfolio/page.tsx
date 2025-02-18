import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "TeamTailor Integrator for WordPress",
    description:
      "A plugin for fetching Job Ads managed through TeamTailor and turning them into structured Custom Post data inside of WordPress.",
    imageUrl: "/wp_pic.webp",
    link: "https://github.com/dotMavriQ/TeamTailor-Integrator-For-WordPress",
  },
  {
    title: "TopTex-API-to-WooCommerce-Importer",
    description: "Imports product data from TopTex API into WooCommerce.",
    imageUrl: "/wp_pic.webp",
    link: "https://github.com/dotMavriQ/TopTex-API-to-WooCommerce-Importer",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen p-8">
      {/* Back button styled like main page buttons */}
      <nav className="mb-4">
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

      <header className="mb-8">
        <h1 className="text-4xl font-bold">Portfolio</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={400}
              height={300}
              className="rounded-md"
            />
            <h2 className="text-2xl mt-4">{project.title}</h2>
            <p className="mt-2 text-sm">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
