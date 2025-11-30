/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00D9FF',
          dark: '#00B8D4',
          light: '#33E3FF',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          lighter: '#1A1A1A',
          light: '#2A2A2A',
        },
        accent: {
          cyan: '#00D9FF',
          pink: '#FF3366',
          purple: '#A855F7',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow-cyan': 'radial-gradient(circle, rgba(0, 217, 255, 0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 217, 255, 0.5)',
        'glow-cyan-lg': '0 0 40px rgba(0, 217, 255, 0.6)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}