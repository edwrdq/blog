/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gruvbox: {
          // Background colors
          bg0: '#282828',
          bg1: '#3c3836', 
          bg2: '#504945',
          bg3: '#665c54',
          bg4: '#7c6f64',
          
          // Foreground colors
          fg0: '#fbf1c7',
          fg1: '#ebdbb2',
          fg2: '#d5c4a1', 
          fg3: '#bdae93',
          fg4: '#a89984',
          
          // Accent colors
          red: '#fb4934',
          green: '#b8bb26',
          yellow: '#fabd2f',
          blue: '#83a598',
          purple: '#d3869b', 
          aqua: '#8ec07c',
          orange: '#fe8019',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}