const autoprefixer = require('autoprefixer')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx|js|jsx)$/,
    loader: require.resolve('babel-loader')
  })

  config.module.rules.push({
    test: /\.styl$/,
    use: [
      {
        loader: require.resolve('style-loader')
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          sourceMap: false,
          plugins: [autoprefixer]
        }
      },
      {
        loader: require.resolve('stylus-loader')
      }
    ]
  })

  config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx')

  return config
}
