"use client";
import Link from "next/link";
import { useState } from "react";

interface MenuItem {
  name: string;
  href: string;
  color: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { name: "About", href: "/about", color: "#83a598" },
    { name: "CV", href: "/cv", color: "#fe8019" },
    { name: "Portfolio", href: "/portfolio", color: "#b8bb26" },
    { name: "Blog", href: "/blog", color: "#fabd2f" },
    { name: "Contact", href: "/contact", color: "#fb4934" },
  ];

  return (
    <div className="relative">
      {/* Mobile Hamburger Button (visible on mobile only) */}
      <div className="md:hidden">
        <button
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Menu (visible on md+ screens) */}
      <ul className="hidden md:flex gap-6 items-center">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href="/blog">
              <span
                style={{ color: item.color }}
                className="font-bold hover:underline focus:outline-none focus:underline"
              >
                {item.name}
              </span>
            </Link>
            <Link href="/blog">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                New Post
              </button>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-2 absolute right-0 bg-background p-4 rounded shadow-lg z-10">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <span
                  style={{ color: item.color }}
                  className="font-bold block hover:underline focus:outline-none focus:underline"
                  onClick={() => setIsMenuOpen(false)} // Closes menu after click
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
