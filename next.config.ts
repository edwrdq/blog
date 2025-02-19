import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // this ensures a static build in the `out` folder
  basePath: "/blog.dotmavriq",
  assetPrefix: "/blog.dotmavriq/",
  // ...any other config (like Tailwind or other Next.js features)
};

export default nextConfig;
