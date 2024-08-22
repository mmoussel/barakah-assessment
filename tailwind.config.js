/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        primary: "#C3E703",
        divider: "rgba(0, 0, 0, 0.08)",
        card: "#F0F1F2",
        text: "#000",
        subtext: "#B2B6B8",
        error: "#EA1818",
        warning: "#FD9418",
        success: "rgba(85, 189, 121, 1)",
      },
    },
  },
  plugins: [],
};
