const path = require('path');
const plugins = require('./plugins');
const R = require('ramda');

module.exports = R.merge({
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: 'index-[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader'
        }
      ],
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
  plugins
);
