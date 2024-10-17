const HtmlRspackTagsPlugin = require('html-rspack-tags-plugin');
const rspack = require('@rspack/core');

module.exports = {
  plugins: [
    new rspack.HtmlRspackPlugin(),
    new HtmlRspackTagsPlugin({ tags: ['a.js', 'b.css'], append: true }),
  ],
};