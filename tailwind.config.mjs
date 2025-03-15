/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["var(--font-zentry)", "sans-serif"],
        general: ["var(--font-general)", "sans-serif"],
        "circular-web": ["var(--font-circular-web)", "sans-serif"],
        "robert-medium": ["var(--font-robert-medium)", "sans-serif"],
        "robert-regular": ["var(--font-robert-regular)", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
    },
  },
  plugins: [],
};

export default config;
