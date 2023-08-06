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
      fontFamily: {
        proxima: ['Proxima Nova','sans-serif'],
        pilbook: 'Pilat Extended Book',
        pilbold: 'Pilat Extended Bold',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
