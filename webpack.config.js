const webpack = require('webpack')
const path = require('path')

const isTest = process.env.NODE_ENV == 'test'

const config = {
  plugins: [new webpack.NormalModuleReplacementPlugin(/sinon/, __dirname + '/node_modules/sinon/pkg/sinon.js')],

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
    ],
    noParse: [
      /babel-core\/browser-polyfill\.js/,
      /acorn\/dist\/acorn\.js/,
      /sinon/
    ]
  },

  devtool: isTest ? 'inline-source-map' : null,

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    libraryTarget: 'umd',
    path:     './dist',
    filename: '[name].js'
  },

  externals: isTest ? {} : {
    'react': 'React',
    'react/addons': 'React'
  }

}

module.exports = config;
