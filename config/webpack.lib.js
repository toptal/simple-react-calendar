const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.core')

const libraryWebpackConfig = merge.smart(baseWebpackConfig, {
  entry: {
    'simple-calendar': path.resolve(__dirname, '../src'),
  },

  mode: 'production',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  output: {
    filename: '[name].js',
    library: 'Calendar',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
    sourceMapFilename: '[file].map',
  },

  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'date-fns': {
      commonjs: 'date-fns',
      commonjs2: 'date-fns',
      amd: 'DateFNS',
      root: 'DateFNS',
    },
    classnames: {
      commonjs: 'classnames',
      commonjs2: 'classnames',
      amd: 'Classnames',
      root: 'Classnames',
    },
  },
})

module.exports = libraryWebpackConfig
