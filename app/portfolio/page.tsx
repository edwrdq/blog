"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    title: "TiLiGen",
    description: "A Gruvbox-themed tier list maker with drag and drop functionality",
    imageUrl: "/tiligenscreenshot.png",
    link: "https://github.com/dotMavriQ/TiLiGen",
    tags: ["TypeScript", "HTML", "CSS"],
  },
  {
    title: "Obsitica",
    description:
      "A plugin for Obsidian that interacts with the Habitica API among other things that enhance journaling and local data insights.",
    imageUrl:
      "https://repository-images.githubusercontent.com/738920597/5a41f94a-538c-4456-ab11-da9c4c873bbc",
    link: "https://github.com/dotMavriQ/Obsitica",
    tags: ["TypeScript", "Shell", "CSS"],
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
  TypeScript: "bg-[#458588] text-[#fbf1c7]", // Gruvbox blue
  Shell: "bg-[#b16286] text-[#fbf1c7]", // Gruvbox purple
  CSS: "bg-[#fabd2f] text-[#fbf1c7]", // Gruvbox yellow
  JavaScript: "bg-[#d79921] text-[#fbf1c7]", // Gruvbox dark yellow
  WordPress: "bg-[#83a598] text-[#fbf1c7]", // Gruvbox teal
  PHP: "bg-[#d3869b] text-[#fbf1c7]", // Gruvbox pink
  HTML: "bg-[#b8bb26] text-[#fbf1c7]", // Gruvbox green
};

export default function Portfolio() {
  // Extract all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  // State to keep track of selected tags
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  // State for filtered projects (initially sorted alphabetically)
  const [filteredProjects, setFilteredProjects] = useState(
    [...projects].sort((a, b) => a.title.localeCompare(b.title))
  );

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag)) {
        return prevSelectedTags.filter((t) => t !== tag);
      } else {
        return [...prevSelectedTags, tag];
      }
    });
  };

  // Update filtered projects when selected tags change
  useEffect(() => {
    const sortedProjects = [...projects].sort((a, b) => 
      a.title.localeCompare(b.title)
    );
    
    if (selectedTags.length === 0) {
      setFilteredProjects(sortedProjects);
    } else {
      setFilteredProjects(
        sortedProjects.filter((project) =>
          selectedTags.every((tag) => project.tags.includes(tag))
        )
      );
    }
  }, [selectedTags]);

  return (
    <div 
      className="min-h-screen p-8 bg-[#282828] text-[#ebdbb2]"
      aria-label="Portfolio page"
    >
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="mt-2 text-lg text-[#a89984]">
          Filter projects by clicking on multiple tags below
        </p>
      </header>

      {/* Filter Tags */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTags.includes(tag)
                  ? `${tagColors[tag]}`
                  : `bg-[#3c3836] text-[#a89984] hover:bg-opacity-80`
              }`}
              aria-pressed={selectedTags.includes(tag)}
              aria-label={`Filter by ${tag}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        aria-live="polite"
        aria-label="Project list"
      >
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-10 bg-[#3c3836] rounded-lg border border-[#504945]">
            <p className="text-lg text-[#ebdbb2]">
              No projects match the selected filters. Click on a selected filter to deselect it.
            </p>
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#665c54] rounded-lg p-4 hover:shadow-lg transition bg-[#3c3836] focus:outline-none focus:ring-2 focus:ring-[#83a598]"
              aria-label={`${project.title}: ${project.description}`}
            >
              <div className="flex items-start gap-4">
                <Image
                  src={project.imageUrl}
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-md object-cover w-20 h-20"
                  aria-hidden="true"
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
          ))
        )}
      </div>
    </div>
  );
}