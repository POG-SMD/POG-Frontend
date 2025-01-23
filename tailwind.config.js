/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#FCFCFD",
          card: "#FFFFFF",
          bg: "#FAFBFF",
        },
        positive: "#039855",
        negative: "#D92D20",
        background: "#F2F7FD",
        line: "#D8E1F8",
        primary: {
          DEFAULT: "#000",
        },
        secondary: "#fff",
        textGray: "#0F172A",
      },
    },
  },
  plugins: [],
};
