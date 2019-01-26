const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './public/javascripts/MAIN.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts/fallbackBundle'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules:[{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
}
