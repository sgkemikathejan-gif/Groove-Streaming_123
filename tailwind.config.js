/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Windows 11 Fluent — dark (Mica dark) theme.
        ink: "#1F1F1F", // app background
        surface: "#2C2C2C", // cards / sidebar / title bar
        surface2: "#3A3A3A", // hover / pressed surface
        cream: "#F5F5F5", // primary text (light-on-dark)
        muted: "#A6A6A6", // secondary text
        gold: "#3B96FF", // Windows 11 dark-mode accent blue
        brick: "#FF6B6B", // error red, brightened for dark bg
        line: "#3B3B3B", // borders / dividers
      },
      fontFamily: {
        display: [
          "Oswald",
          "Segoe UI Variable Display",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "Segoe UI Variable Text",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        logo: ["Righteous", "system-ui", "sans-serif"],
        nav: ["Oswald", "Segoe UI", "system-ui", "sans-serif"],
      },
      borderRadius: {
        win: "8px",
      },
    },
  },
  plugins: [],
};
