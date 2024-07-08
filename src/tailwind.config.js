module.exports = {
  darkMode: 'class', // Enable dark mode
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        secondary: '#8892b0',
        accent: '#64ffda',
      },
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
      transform: ['group-hover'],
    },
  },
  plugins: [],
};
