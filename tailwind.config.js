/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/client/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary_bg: "#FDFDFD",
        secondary_bg: "#F7F7F7",
        gray:"#B2B1B1" , 
        blue: "#4285F4",
        orange:"#FFAA8B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
