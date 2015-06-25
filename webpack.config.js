const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    'simple-calendar': './src/index'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      }
    ]
  },

  // TODO: figure why tests not working with sourcemaps
  devtool: process.env.NODE_ENV == 'test' ? null : 'inline-source-map',

  resolve: {
    extensions: ['', '.js', '.jsx', '.coffee']
  },

  output: {
    libraryTarget: 'umd',
    path:     './dist',
    filename: '[name].js'
  }
}

module.exports = config;
