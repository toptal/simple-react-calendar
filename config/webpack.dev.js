const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.core')

const developmentConfig = merge.smart(baseWebpackConfig, {
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    port: 9000
  },

  entry: './src/example/index.tsx',

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [autoprefixer],
              sourceMap: false
            }
          },
          {
            loader: 'stylus-loader'
          }
        ]
      }
    ]
  },

  output: {
    filename: 'ui.bundle.js',
    path: path.resolve(__dirname, '../dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      appMountId: 'root',
      inject: false,
      template: require('html-webpack-template'),
      title: 'SimpleReactCalendar'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.styl']
  }
})

module.exports = developmentConfig
