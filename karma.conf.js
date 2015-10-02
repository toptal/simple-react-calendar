process.env.NODE_ENV = 'test'

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      'node_modules/babel-core/browser-polyfill.js',
      'src/**/*_spec.js{,x}'
    ],
    preprocessors: {
      '**/*.js{,x}': ['webpack', 'sourcemap']
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
  });
};
