/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'primaryFont': ['Open Sans', 'sans-serif'],
      'headerFont' : [ 'Helvetica Neue', 'Arial', 'sans-serif']
      // 'headerFont' : [ 'Yellowtail', 'cursive']
    
   },

    colors: {
     oxBlood:'#4A0000'
    },
  },
  plugins: [],
}

