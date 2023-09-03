/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      'ping-slow-1': 'ping 1s linear infinite',
      'ping-slow-2': 'ping 2s linear infinite',
      'ping-slow-3': 'ping 3s linear infinite',
    },
  },
  plugins: [],
}