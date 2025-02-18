import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#282828", // Gruvbox Dark background
        foreground: "#ebdbb2", // Gruvbox Dark foreground
        primary: "#fe8019",    // Bold accent color
        secondary: "#fabd2f",  // Secondary accent color
        accent: "#83a598",     // Additional accent tone
        // Optionally, add more Gruvbox-inspired colors:
        muted: "#3c3836",      // For card backgrounds or paper
        error: "#fb4934",      // Gruvbox red for error messages
        success: "#b8bb26",    // Gruvbox green for success messages
      },
    },
  },
  plugins: [],
} satisfies Config;
