/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'slate-200': '#E5E7EB',
        'slate-700': '#374151',
        'teal-600': '#047857',
        'slate-900': '#1F2937',
      },
    },
  },
  plugins: [],
}

