/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e6757a",
        secondary: "#f0b0a4",
        tertiary: '#e36377',
      },
    },
  },
  plugins: [],
};
