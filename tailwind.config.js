/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        getmoreBtnColor:'#8ec038',
        viewPlanBtnColor:'#d6111e',
        cardBackgroundColor:'#f3f5ed',  
      },
      image:{

      }
     
    },
  },
  plugins: [],
}

