const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.core')

const developmentConfig = merge.smart(baseWebpackConfig, {
  entry: './src/example/index.jsx',

  mode: 'development',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'ui.bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.styl'],
  },

  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: false,
              plugins: [autoprefixer],
            },
          },
          {
            loader: 'stylus-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'SimpleReactCalendar',
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
})

module.exports = developmentConfig
