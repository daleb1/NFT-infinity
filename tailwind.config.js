/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        "nft-gold": {
          primary: "#FFD700",
          secondary: "#FFFDD0",
          accent: "#F0E130",
          background: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
