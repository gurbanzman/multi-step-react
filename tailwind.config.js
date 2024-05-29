/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "1/2": "50%",
      },
      content: {
        checkbox: "'✓'",
      },
      colors: {
        "checkbox-blue": "#1D4ED8", // İstediğiniz rengi buraya ekleyebilirsiniz.
        "checkbox-white": "#FFFFFF",
      },
      bg: {
        "light-gray": "#F8F9FF",
      },
      spacing: {
        "-54px": "54px",
      },
      screens: {
        "sl": { max: "426px" },
        sm: { max: "640px" },
        md: { max: "768px" },
        lg: { max: "1024px" },
        xl: { max: "1280px" },
        "2xl": { max: "1536px" },
      },
    },
  },
  plugins: [],
};
