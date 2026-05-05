/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        hamim: {
          orange: '#ff8a2a',
          soft: '#fff4e9',
          green: '#007d62',
        },
      },
      boxShadow: {
        soft: '0 14px 35px rgba(29, 41, 57, 0.08)',
      },
    },
  },
  plugins: [],
};
