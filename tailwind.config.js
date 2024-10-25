/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        drop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        floatDiagonal: {
          '0%': { transform: 'translate(-20%, -20%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translate(120%, 120%)', opacity: '0' },
        },
        floatZigZag: {
          '0%': { transform: 'translateX(0)', opacity: '0' },
          '25%': { transform: 'translateX(20px)' },
          '50%': { transform: 'translateX(-20px)', opacity: '1' },
          '100%': { transform: 'translateX(100vw)', opacity: '0' },
        },
        floatWave: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '25%': { transform: 'translateY(-10px)', opacity: '1' },
          '50%': { transform: 'translateY(10px)' },
          '75%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)', opacity: '0' },
        },
      },
      animation: {
        drop: 'drop 10s infinite ease-in-out',
        floatDiagonal: 'floatDiagonal 8s ease-in-out infinite',
        floatZigZag: 'floatZigZag 6s ease-in-out infinite',
        floatWave: 'floatWave 10s linear infinite',
      },
  
    },
  },
  plugins: [],
}

