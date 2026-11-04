/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        lilac: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
        },
        blush: {
          50: '#FDF7F9',
          100: '#FAF0F4',
          200: '#F5DEEA',
          300: '#EDBBD7',
          400: '#E28ABF',
          500: '#D45A9E',
        },
        pastel: {
          bg: '#FCF8FA',
          subtle: '#F8EEF5',
          border: '#F0E2EC',
          text: '#2D2233',
          muted: '#7B6B82',
        }
      },
      animation: {
        'bounce-subtle': 'bounceSubtle 2.5s ease-in-out infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'fall-snow': 'fallSnow 8s linear infinite',
      },
      keyframes: {
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fallSnow: {
          '0%': { transform: 'translateY(-10px) translateX(0)', opacity: '0' },
          '20%': { opacity: '0.9' },
          '80%': { opacity: '0.8' },
          '100%': { transform: 'translateY(280px) translateX(25px)', opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}
