const path = require('path');
const plugins = require('./plugins');
const modules = require('./module');
const R = require('ramda');

module.exports = R.mergeAll([
  {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: 'index-[hash].js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
    },
  },
  plugins,
  modules
]);
