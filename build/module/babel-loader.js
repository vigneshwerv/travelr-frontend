module.exports = {
  test: /\.(js|jsx)$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['es2017', 'react']
    }
  }
}
