/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      akira: ["AkiraExpanded", "sans-serif"],
      jakarta: ["PlusJakartaSans", "sans-serif"],
      jakartaBold: ["PlusJakartaSansBold", "sans-serif"],
      sedgwick: ["SedgwickAve", "sans-serif"],
      shrikhand: ["Shrikhand", "sans-serif"],
    },
    extend: {
      colors: {
        "main-1": "#2B2B2B",
        "main-2": "#FFFFFF",
        "main-3": "#D04435",
        "sec-1": "#AFE710",
        "sec-2": "#109D72",
        "sec-3": "#2156B0",
        "sec-4": "#7631D0",
      },
      backgroundSize: {
        "300%": "300%",
      },
      blur: {
        xs: "2px",
      },
      width: {
        '128' : '32rem'
      }
    },
  },
  plugins: [],
};
