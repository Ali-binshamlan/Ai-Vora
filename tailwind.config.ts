// tailwind.config.js

module.exports = {
  // 🚨 هذا هو السطر الحاسم 🚨
  darkMode: ['class', { className: 'darkMode' }],
  // -------------------------
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}