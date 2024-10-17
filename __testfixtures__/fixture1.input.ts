//change to const HtmlRspackTagsPlugin = require('html-rspack-tags-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
//change to const rspack = require('@rspack/core');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//track the variables assigned in the import statements
module.exports = {
  plugins: [
    //change to new rspack.HtmlRspackPlugin(),
    new HtmlWebpackPlugin(),
    //chnage to HtmlRspackTagsPlugin
    new HtmlWebpackTagsPlugin({ tags: ['a.js', 'b.css'], append: true }),
  ],
};