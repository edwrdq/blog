"use client";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Obsitica",
    description:
      "A plugin for Obsidian that interacts with the Habitica API among other things that enhance journaling and local data insights.",
    imageUrl:
      "https://repository-images.githubusercontent.com/738920597/5a41f94a-538c-4456-ab11-da9c4c873bbc",
    link: "https://github.com/dotMavriQ/Obsitica",
    tags: ["TypeScript", "Shell", "CSS", "JavaScript"],
  },
  {
    title: "TeamTailor Integrator for WordPress",
    description:
      "A plugin for fetching Job Ads managed through TeamTailor and turning them into structured Custom Post data inside of WordPress.",
    imageUrl: "/wp_pic.webp",
    link: "https://github.com/dotMavriQ/TeamTailor-Integrator-For-WordPress",
    tags: ["WordPress", "PHP", "JavaScript"],
  },
  {
    title: "TopTex-API-to-WooCommerce-Importer",
    description: "Imports product data from TopTex API into WooCommerce.",
    imageUrl: "/wp_pic.webp",
    link: "https://github.com/dotMavriQ/TopTex-API-to-WooCommerce-Importer",
    tags: ["WordPress", "PHP", "JavaScript"],
  },
];

const tagColors: Record<string, string> = {
  TypeScript: "bg-[#458588] text-white", // Gruvbox blue
  Shell: "bg-[#b16286] text-white", // Gruvbox purple
  CSS: "bg-[#fabd2f] text-white", // Gruvbox orange
  JavaScript: "bg-[#d79921] text-white", // Gruvbox yellow
  WordPress: "bg-[#83a598] text-white", // Gruvbox teal
  PHP: "bg-[#d3869b] text-white", // Gruvbox pink
};

export default function Portfolio() {
  return (
    <div className="min-h-screen p-8 bg-[#282828] text-[#ebdbb2]">
      {/* Back button */}
      <nav className="mb-4">
        <Link
          href="/"
          className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-[#ebdbb2] text-[#282828] gap-2 hover:bg-[#d5c4a1] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          <span>← Back</span>
        </Link>
      </nav>

      <header className="mb-8">
        <h1 className="text-4xl font-bold">Portfolio</h1>
      </header>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#665c54] rounded-lg p-4 hover:shadow-lg transition bg-[#3c3836]"
          >
            <div className="flex items-start gap-4">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={64}
                height={64}
                className="rounded-md object-cover w-16 h-16"
              />
              <div>
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm text-[#d5c4a1]">{project.description}</p>
              </div>
            </div>
            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors[tag]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
