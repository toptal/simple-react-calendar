const webpack = require('webpack')
const path = require('path')

const isTest = process.env.NODE_ENV == 'test'
const isProduction = process.env.NODE_ENV == 'production'

module.exports = {
  entry: getEntryConfig(),

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

  devtool: isProduction ? 'source-map' : 'inline-source-map',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: getOutputConfig(),

  externals: isTest ? {} : {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  }
}

function getEntryConfig() {
  if (process.env.BUILD_TESTS) {
    return {
      'tests': './test.js'
    }
  } else {
    return {
      'simple-calendar': './src/index'
    }
  }
}

function getOutputConfig() {
  if (process.env.BUILD_TESTS) {
    return {
      path: path.join(process.cwd(), 'tmp'),
      filename: '[name].js'
    }
  } else if (process.env.NODE_ENV == 'test') {
    return {
      path: '/'
    }
  } else {
    return {
      library: 'Calendar',
      libraryTarget: 'umd',
      path: path.join(process.cwd(), 'dist'),
      filename: '[name].js'
    }
  }
}
