process.env.NODE_ENV = 'test'

var webpackConfig = require('./webpack.config.js')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon'],

    files: getFilesConfig(),
    preprocessors: getPreprocessorsConfig(),

    webpack: webpackConfig,
    webpackMiddleware: {
      stats: {
        assets: false,
        chunks: false,
        hash: false,
        timings: false,
        version: false
      }
    },

    reporters: ['mocha'],
    mochaReporter: {
      output: process.env.TEST_TZ ? 'minimal' : 'full'
    },

    browsers: ['PhantomJS2']
  })
}

function getFilesConfig() {
  if (process.env.USE_STATIC_TESTS) {
    return ['./tmp/tests.js']
  } else {
    return ['./test.js']
  }
}

function getPreprocessorsConfig() {
  if (process.env.USE_STATIC_TESTS) {
    return {
      './tmp/tests.js': ['sourcemap']
    }
  } else {
    return {
      './test.js': ['webpack', 'sourcemap']
    }
  }
}
