var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new HtmlWebpackPlugin({
  title: 'Travelr',
  hash: true,
  cache: true,
  inject: 'body',
  template: './src/index.html',
  filename: 'index.html'
});
