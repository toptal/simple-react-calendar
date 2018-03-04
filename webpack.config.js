const webpack = require('webpack')
const path = require('path')
const env = process.env.NODE_ENV

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
}

const config = {
  externals: {
    react: reactExternal,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  entry: {
    'simple-calendar': path.join(__dirname, 'src'),
  },
  output: {
    library: 'Calendar',
    libraryTarget: 'umd',
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
  devtool: env === 'production' ? 'source-map' : 'inline-source-map',
}

module.exports = config
