const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = () => ({
  entry: './src/src/index.ts',

  mode: 'production',

  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    sourceMapFilename: '[file].map',
    library: 'storyhooks',
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  devtool: 'source-map',

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
      }),
    ],
  },

  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      exclude: /(node_modules)/,
      use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.build.json',
          },
        },
      ],
    }, ],
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
    'classnames': {
      commonjs: 'classnames',
      commonjs2: 'classnames',
      amd: 'Classnames',
      root: 'Classnames',
    },
  },
})
