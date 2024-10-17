Change import and usage of  from html-webpack-tags-plugin  to use includedhtml-rspack-tags-plugin.


### Before

```ts
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
```

### After

```ts
const HtmlRspackTagsPlugin = require('html-rspack-tags-plugin');
const rspack = require('@rspack/core');

module.exports = {
  plugins: [
    new rspack.HtmlRspackPlugin(),
    new HtmlRspackTagsPlugin({ tags: ['a.js', 'b.css'], append: true }),
  ],
};
```

