/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-pri":"#FF0000",
        "me":"white"
      },

      screens:{
        sm: '280px',
        md: '468px',
      },

      fontFamily:{
        "header":["Poppins"]
      },
      backgroundImage:{
        "hero-image":"url('/src/assets/img.jpg')"
      }
    },
  },
  plugins: [],

  
}