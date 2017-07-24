const { resolve } = require('path');

module.exports = {

  entry: {
    'html.spec': './testing/tests/index.js'
  },

  output: {
    filename: '[name].js',
    path: resolve('testing/bundles'),
  },

  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: /node_modules\/(?!@frampton)/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: [ '.js' ]
  }
};
