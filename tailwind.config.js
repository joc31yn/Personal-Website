/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cream': "#f7f4eb",
        "apricot": "#F4A261",
        "terracotta":"#E76F51",
        "charcoal":"#263238"
      }
    },
  },
  plugins: [],
}