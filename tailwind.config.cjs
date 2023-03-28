/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ['Poppins', "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'updated-image': "url('/src/assets/updated.png')",
        'header-bg-image': "url('/src/assets/header-bg-left.png')",
        'bg-2': "url('/src/assets/bg-2.png')",
        'last-bg': "url('/src/assets/lastbg.png')",
        
      }

    },
  },
  plugins: [],
}
