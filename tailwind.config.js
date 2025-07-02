// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        atkinson: ['"Atkinson Hyperlegible"', "sans-serif"],
        sanchez: ["Sanchez", "serif"],
      },
    },
  },
  plugins: [],
};
