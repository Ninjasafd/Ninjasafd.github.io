module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'space-gradient': 'radial-gradient(circle at 50% 50%, #3b3a47, #1b1a22)',
      },
    },
  },
  plugins: [],
};
