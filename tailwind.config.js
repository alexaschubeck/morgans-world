/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic': ['Comic Sans MS', 'cursive'],
        'retro': ['Courier New', 'monospace'],
        'morgan': ['Impact', 'Arial Black', 'Franklin Gothic Bold', 'Trebuchet MS', 'Helvetica', 'Arial', 'sans-serif'],
        'cute': ['Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Arial', 'sans-serif'],
        'cursive': ['"Brush Script MT"', '"Lucida Handwriting"', '"Dancing Script"', '"Pacifico"', 'cursive'],
        'elegant': ['"Great Vibes"', '"Dancing Script"', '"Pacifico"', '"Brush Script MT"', 'cursive'],
      },
      colors: {
        'retro-pink': '#FFB6C1',
        'retro-purple': '#DDA0DD',
        'retro-blue': '#87CEEB',
        'retro-green': '#98FB98',
        'retro-yellow': '#FFFFE0',
        'hot-pink': '#FF1493',
        'barbie-pink': '#FF69B4',
        'glitter-pink': '#FFB3DE',
        'princess-purple': '#DA70D6',
        'brown-300': '#D2B48C',
        'brown-400': '#CD853F',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        sparkle: {
          '0%': { opacity: 0.3 },
          '100%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}
