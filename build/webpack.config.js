const path = require('path');
const plugins = require('./plugins');
const R = require('ramda');

module.exports = R.merge({
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: 'index-[hash].js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
    },
  },
  plugins
);
