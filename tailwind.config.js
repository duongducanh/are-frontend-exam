/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        notoSans: ['Noto Sans JP', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        primary: {
          300: '#FFCC21',
          400: '#FF963C',
          500: '#EA6C00'
        },
        secondary: {
          300: '#8FE9D0'
        },
        light: '#FFFFFF',
        dark: {
          500: '#414141',
          600: '#2E2E2E'
        },
        gray: {
          400: '#777777'
        }
      },
      backgroundImage: (theme) => ({
        'primary-300-400': `linear-gradient(180deg, ${theme('colors.primary.300')} 0%, ${theme('colors.primary.400')} 100%)`
      })
    }
  },
  plugins: []
};
