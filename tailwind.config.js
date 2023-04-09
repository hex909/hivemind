/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "clash-bold": "ClashDisplay-Bold",
        "clash-semibold": "ClashDisplay-Semibold",
        "clash-medium": "ClashDisplay-Medium",
        "clash-regular": "ClashDisplay-Regular",
        "clash-light": "ClashDisplay-Light",
        "clash-extralight": "ClashDisplay-Extralight",
        "clash-variable": "ClashDisplay-Variable",
      },
      colors: {
        dark: " #272423",
        "dark-green": "#a9ae9b",
        "light-green": "#e4ead3",
      },
      maxWidth: {
        1440: "1440px",
      },
      minHeight: {
        "with-out-nav": "calc(100vh - 120px)",
      },
    },
  },
  plugins: [],
};
