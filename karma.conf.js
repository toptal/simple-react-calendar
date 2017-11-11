process.env.NODE_ENV = 'test'

const webpackConfig = require('./webpack.config.js')

const browserStackLaunchers = {
  chrome: {
    'base': 'BrowserStack',
    'browser': 'chrome',
    'browser_version': '44',
    'os': 'Windows',
    'os_version': '8.1',
  },

  firefox: {
    'base': 'BrowserStack',
    'browser': 'firefox',
    'browser_version': '40',
    'os': 'Windows',
    'os_version': '8.1',
  },

  ie10: {
    'base': 'BrowserStack',
    'browser': 'ie',
    'browser_version': '10.0',
    'os': 'Windows',
    'os_version': '7'
  },

  ie11: {
    'base': 'BrowserStack',
    'browser': 'ie',
    'browser_version': '11.0',
    'os': 'Windows',
    'os_version': '8.1'
  },

  edge: {
    'base': 'BrowserStack',
    'browser': 'edge',
    'browser_version': '12.0',
    'os': 'Windows',
    'os_version': '10'
  }
}

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

    mochaReporter: {
      output: process.env.TEST_TZ ? 'minimal' : 'full'
    },

    // We are limited in the number of parallel VMs in BrowserStack (1)
    // and Karma don't know how to limit parallel browser instances
    // so waiting time must be insanely high.
    browserNoActivityTimeout: process.env.TEST_BROWSERSTACK
      ? 60 * 60 * 1000 /* 1 hour */
      : 10 * 1000, /* 10 sec */
    captureTimeout: process.env.TEST_BROWSERSTACK
      ? 120 * 1000 /* 2 min */
      : 60 * 1000, /* 1 min */

    // Start the tunnel
    // See: https://github.com/karma-runner/karma-browserstack-launcher/issues/17#issuecomment-181559755
    browserStack: {
      startTunnel: true
    },

    customLaunchers: process.env.TEST_BROWSERSTACK ? browserStackLaunchers : {},
    browsers: process.env.TEST_BROWSERSTACK ? Object.keys(browserStackLaunchers) : ['PhantomJS'],
    reporters: process.env.TEST_BROWSERSTACK ? ['dots'] : ['mocha']
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
