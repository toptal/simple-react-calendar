process.env.NODE_ENV = 'test'

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon'],
    files: [
      './test.js'
    ],
    preprocessors: {
      './test.js': ['webpack', 'sourcemap']
    },
    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      stats: {
        assets: false,
        chunks: false,
        hash: false,
        timings: false,
        version: false
      }
    },
    browsers: ['PhantomJS2'],
    reporters: ['mocha']
  })
}
