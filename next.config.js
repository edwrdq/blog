/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? "export" : undefined,
  // For GitHub Pages deployment, set the basePath to match your repo name
  // If your site is at https://username.github.io/repo-name/
  // Only set basePath for actual deployment, not for preview
  basePath: process.env.NODE_ENV === 'production' && !process.env.TYPESCRIPT_CHECK ? "/blog.dotmavriq" : "",

  images: {
    unoptimized: true,
  },

  // Fix for Node.js modules usage in the browser
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve 'fs' module on the client
      config.resolve.fallback = {
        fs: false,
        path: false,
        process: false,
      };
    }
    return config;
  },

  // Temporarily disable TypeScript checking
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
