/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary:   "#070A16",   // deep blue-black  (was navy #131424)
        secondary: "#0E1225",   // slightly lighter  (was grey  #393A47)
        accent:    "#06B6D4",   // cyan              (was red   #F13024)
        icon:      "#222327",
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles:   'url("/bg-circles.png")',
        circleStar:'url("/circle-star.svg")',
        site:      'url("/site-bg.svg")',
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      fontFamily: {
        Sora: [`Sora`, "sans-serif"],
      },
    },
  },
  plugins: [],
};
