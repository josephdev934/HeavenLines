/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        typing: 'typing 3s steps(40) forwards',
        blink: 'blink 0.7s step-end infinite',
        fadeIn: 'fadeIn 1s ease forwards',
      },

      // ⭐ ADD TEXT SHADOWS HERE
      textShadow: {
        sm: '1px 1px 3px rgba(0,0,0,0.9)',
        DEFAULT: '2px 2px 6px rgba(0,0,0,0.8)',
        lg: '3px 3px 10px rgba(0,0,0,0.9)',
      },
    },
  },

  // ⭐ ADD THIS PLUGIN
  plugins: [
    function ({ addUtilities, theme }) {
      const shadows = theme('textShadow');
      const utilities = {};

      for (const key in shadows) {
        utilities[`.text-shadow${key === 'DEFAULT' ? '' : '-' + key}`] = {
          textShadow: shadows[key],
        };
      }

      addUtilities(utilities);
    },
  ],
};
