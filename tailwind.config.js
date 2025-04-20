/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
    "./src/**/*.component.html",
    "./src/**/*.component.ts",
    "./projects/**/*.{html,ts,scss}",
    "./node_modules/primeng/**/*.{js,mjs}"
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors here
      },
      spacing: {
        // Custom spacing values
      },
      fontFamily: {
        // Custom font families
      },
    },
  },
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles to avoid conflicts with Angular
  },
  plugins: [],
}
