/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch', // add required value here
            marginBottom: '0em',
            marginTop: '0em',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')({})],
}
