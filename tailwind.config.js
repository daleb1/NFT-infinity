/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    safelist: ['animate-[fade-in-up_1s_ease-in-out]',
    'animate-[fade-in-down_1s_ease-in-out]'],
    extend: {
      colors: {
        "nft-gold": {
          primary: "#FFD700",
          secondary: "#FFFDD0",
          accent: "#F0E130",
          background: "#FFFFFF",
          primaryDark: "#14141F",
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
  // ...
  plugins: [
    require('tailwindcss-animated')
  ],
};