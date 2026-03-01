/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'system-bg': '#f8fafc',
        'system-surface': '#ffffff',
        'system-text': '#0f172a',
        'system-muted': '#64748b',
        'system-blue': {
          DEFAULT: '#2563eb',
          dark: '#1e40af',
          light: '#60a5fa',
        },
        'system-border': '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Inter', 'serif'], // Keeping it clean with Inter for now, can change later
      }
    },
  },
  plugins: [],
}
