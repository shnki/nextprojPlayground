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
        darkBg: "#000000", // Customize the dark background color here
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gradientColorStops: {
        "gradient-start": "#000000", // Customize the gradient start color here
        "gradient-middle": "#333333", // Customize the gradient middle color here
        "gradient-end": "#666666", // Customize the gradient end color here
      },
    },
  },
  plugins: [],
};
