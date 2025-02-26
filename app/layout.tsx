import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar"; // Adjust the path if needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "blog.dotMavriQ",
  description:
    "A state-of-the-art DevBlog built with Next.js, Tailwind, and Gruvbox Dark aesthetics.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} flex flex-col h-screen antialiased bg-background text-foreground`}
      >
        <header className="p-4 border-b border-foreground">
          <div className="flex flex-row items-center justify-between">
            {/* Site Title */}
            <h1 className="text-3xl font-bold">
              <Link href="/">blog.dotMavriQ</Link>
            </h1>
            {/* Responsive Navbar */}
            <Navbar />
          </div>
        </header>
        {/* Main content expands to fill remaining space */}
        <main className="flex-grow p-4">{children}</main>
        <footer className="p-4 text-center border-t border-foreground">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center">
            <span>🄯 {new Date().getFullYear()} dotMavriQ.</span>
            <span className="md:ml-2">All base are belong to us.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
