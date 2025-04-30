module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // ✅ use the correct plugin
    require('autoprefixer'),
  ],
};
