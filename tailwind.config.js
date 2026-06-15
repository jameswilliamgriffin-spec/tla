/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101828',
        paper: '#f7f6f2',
        violet: '#7357ff',
        cyan: '#54d6dd',
        coral: '#ff7a68',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(16, 24, 40, 0.09)',
        card: '0 14px 40px rgba(16, 24, 40, 0.07)',
      },
    },
  },
  plugins: [],
}
