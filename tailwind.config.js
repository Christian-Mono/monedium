/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch', // add required value here
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')({})],
}
