/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'dark': '#1e2225',
      'sand': '#f2e4d9'
    },
    extend: {
      backgroundImage: { },
    },
  },
  plugins: [],
}
