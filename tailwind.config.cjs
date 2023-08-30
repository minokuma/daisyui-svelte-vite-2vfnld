module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ecf756',
          secondary: '#dd373f',
          accent: '#c3ff9e',
          neutral: '#201e2a',
          'base-100': '#363437',
          info: '#79cff1',
          success: '#1d726b',
          warning: '#c2690a',
          error: '#e3545d',
        },
      },
    ],
  },
  content: ['./src/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
};
