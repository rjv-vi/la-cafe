/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Тёплый бежевый/мокко фон, белые карточки меню, розовый акцент
        sand: {
          50: '#F8F2E6',
          100: '#EFE3CF',
          200: '#E5D5BA',
          300: '#D7C19C',
          400: '#B59873',
        },
        ink: {
          50: '#F5EBD8',
          400: '#5C3F22',
          600: '#3F2A18',
          800: '#2A1A10',
          900: '#1A0F08',
        },
        coffee: {
          // Тёплый кофейно-карамельный — для пилюль и кнопок
          200: '#D9B594',
          400: '#B27A52',
          500: '#9B6240',
          600: '#7A4A2D',
        },
        rose: {
          // Ярко-розовый акцент для promo
          100: '#FCE3E8',
          200: '#F8C8D2',
          300: '#F5B5C5',
          400: '#EE91A6',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        card: '0 8px 24px -16px rgba(31, 20, 11, 0.18)',
      },
    },
  },
  plugins: [],
}
