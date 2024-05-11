/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'bellefair': ['Bellefair', 'sans-serif'],
        'edu-qlld-beginner': ['"Edu QLD Beginner"', 'sans-serif'],
      },
      colors: {
        olive: "#D4D6CA", // Définissez votre propre code couleur ici
        text: "#363632",// Définissez votre propre code couleur ici
      },
    },
  },
  plugins: [],
};
