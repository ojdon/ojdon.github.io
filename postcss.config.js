const jekyllEnv = process.env.JEKYLL_ENV || "development";

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...(process.env.JEKYLL_ENV === 'production'
            ? [require('cssnano')({ preset: 'default' })]
            : [])
    ]
}