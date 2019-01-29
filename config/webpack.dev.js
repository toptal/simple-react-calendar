const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = () => ({
  entry: './src/example/index.tsx',

  mode: 'development',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'ui.bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.styl'],
  },

  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    port: 9000,
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
      },
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
