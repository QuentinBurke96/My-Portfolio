/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 5s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%" : {
            transform: "translate(30px, -50px) scale(1.3)",
          },  
          "66%" : {
            transform: "translate(-20px, 20px) scale(0.7)",
          },  
          "66%" : {
            transform: "translate(0px, 0px)scale(1)",
          },  
        }

      },
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};