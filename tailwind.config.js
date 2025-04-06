/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        'avatar-primary': '#6366f1',     // Indigo-500 (customize as needed)
        'avatar-secondary': '#818cf8',   // Indigo-400
        'avatar-dark': '#1e1b4b',        // Optional: dark text
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        sm: '4px',
      },
    },
  },
  plugins: [],
};
