import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E3DACA',    // Light beige
        secondary: '#A69F88',  // Taupe
        accent: '#6D6875',     // Muted purple
        dark: '#41403E',       // Dark gray
        light: '#F5F2EB',      // Off-white
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config 