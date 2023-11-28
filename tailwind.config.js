/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './anwyl-homes/**/*.html'
  ],
  theme: {
    fontFamily: {
      'sans': 'var(--font-family--primary)',
      'serif': 'var(--font-family--secondary)',
    },
    fontSize: {
      'xs': 'var(--font-size--xs)',
      'sm': 'var(--font-size--sm)',
      'base': 'var(--font-size--base)',
      'md': 'var(--font-size--md)',
      'lg': 'var(--font-size--lg)',
      'xl': 'var(--font-size--xl)',
      '2xl': 'var(--font-size--xxl)',
      '3xl': 'var(--font-size--xxxl)'
    },
    extend: {
      colors: {
        'navy': 'var(--color--navy)',
        'teal': 'var(--color--teal)',
        'bronze': 'var(--color--bronze)',
        'green': 'var(--color--green)',
        'stone': 'var(--color--stone)',
        'light-stone': 'var(--color--light-stone)',
        'black': 'var(--color--black)',
        'mid-gray': 'var(--color--mid-gray)',
        'white': 'var(--color--white)'
      },
      spacing: {
        'xxs': 'var(--spacing--xxs)',
        'xs': 'var(--spacing--xs)',
        'sm': 'var(--spacing--sm)',
        'md': 'var(--spacing--md)',
        'lg': 'var(--spacing--lg)',
        'xl': 'var(--spacing--xl)',
        '2xl': 'var(--spacing--xxl)'
      },
      screens: {
        'menu': '1200px',
      }
    }
  },
  corePlugins: {
    preflight: false
  },
  plugins: []
}
