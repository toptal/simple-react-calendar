const path = require('path')
const { merge } = require('webpack-merge')

const baseWebpackConfig = require('./webpack.core')

const libraryWebpackConfig = merge(baseWebpackConfig, {
  entry: {
    'simple-calendar': path.resolve(__dirname, '../src')
  },

  externals: {
    classnames: {
      amd: 'Classnames',
      commonjs: 'classnames',
      commonjs2: 'classnames',
      root: 'Classnames'
    },
    'date-fns': {
      amd: 'DateFNS',
      commonjs: 'date-fns',
      commonjs2: 'date-fns',
      root: 'DateFNS'
    },
    react: {
      amd: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React'
    },
    'react-dom': {
      amd: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      root: 'ReactDOM'
    }
  },

  mode: 'production',

  output: {
    filename: '[name].js',
    library: 'Calendar',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
    sourceMapFilename: '[file].map'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  }
})

module.exports = libraryWebpackConfig
