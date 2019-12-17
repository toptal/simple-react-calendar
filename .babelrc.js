module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react',
      {
        development: process.env === 'development' || process.env === 'test',
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}
