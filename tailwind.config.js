/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // ← これでダークモードを class で切り替え可能に
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  