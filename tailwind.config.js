/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "500px", // TODO: Make responsivity work properly for cards display
      },
      transitionDelay: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
