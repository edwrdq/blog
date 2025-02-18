import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Code } from "next/font/google";
import "./globals.css";

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
  description: "A state-of-the-art DevBlog built with Next.js, Tailwind, and Gruvbox Dark aesthetics.",
  icons: {
    // Standard Favicons
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    // Apple Touch Icon for iOS
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    // Additional icons & webmanifest
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} antialiased bg-background text-foreground`}
      >
        <header className="p-4 border-b border-foreground">
          <h1 className="text-3xl font-bold">blog.dotMavriQ</h1>
        </header>
        <main className="min-h-screen p-4">{children}</main>
        <footer className="p-4 text-center border-t border-foreground">
          🄯 {new Date().getFullYear()} dotMavriQ. All base are belong to us.
        </footer>
      </body>
    </html>
  );
}
