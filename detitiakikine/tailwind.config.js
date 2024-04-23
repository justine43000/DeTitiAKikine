/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'bellefair': ['Bellefair', 'sans-serif'],
      },
      colors: {
        olive: '#D4D6CA', 
        text: "#363632",// Définissez votre propre code couleur ici
      },
    },
  },
  plugins: [],
}

