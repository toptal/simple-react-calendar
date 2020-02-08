const baseWebpackConfig = {
  devtool: 'source-map',

  module: {
    rules: [
      {
        exclude: [/node_modules/],
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  }
}

module.exports = baseWebpackConfig
