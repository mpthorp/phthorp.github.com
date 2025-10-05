/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors (Blue palette)
        primary: {
          400: '#2F3C64', // primary-400
          500: '#222C4D', // primary-500 (main blue)
        },
        // Secondary colors (Neutral/Beige palette)
        secondary: {
          100: '#F5F2ED', //secondary-100
          200: '#E7E2D6', // secondary-200
          300: '#D7D1C1', // secondary-300  
          400: '#CECAB9', // secondary-400
          500: '#C2BDAC', // secondary-500
        },
        // Tertiary colors (Burgundy palette)
        tertiary: {
          500: '#561A28', // tertiary-500 (burgundy)
        },
        // Neutral colors (Grays)
        neutral: {
          500: '#515256', // neutral-500
          600: '#37383C', // neutral-600
        },
        // Legacy colors (keep for backward compatibility)
        navy: {
          800: '#222C4D', // Maps to primary-500
        }
      },
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
        'sans': ['system-ui', '-apple-system', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'regular': '400',
        'bold': '700',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px', 
        'lg': '1024px',
        'xl': '1280px', // Primary design breakpoint
        '2xl': '1536px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '92': '23rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
