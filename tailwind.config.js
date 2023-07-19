module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  theme: {
    fontFamily: {
        'heading': ['Urbanist', 'sans-serif'],
        'body': ['Merriweather', 'serif'],

    }
  },

  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}