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
    },
  },
  plugins: [],
};

export default config;
