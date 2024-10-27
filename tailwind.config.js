/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundGray: '#f5f5f5',
        buttonBlack: '#2C2C2C',
        buttonGray: '#E3E3E3'
      },
    },
  },
  plugins: [],
};
