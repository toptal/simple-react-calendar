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
        loader: 'babel?{"plugins":["espower"]}'
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
  },

  externals: {
    'react': 'React',
    'react/addons': 'React',
    'lodash': '_'
  }
}

module.exports = config;
