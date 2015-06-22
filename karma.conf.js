process.env.NODE_ENV = 'test';

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      'app/assets/bundles/**/*_spec.js'
    ],
    preprocessors: {
      '**/*.js': ['webpack', 'sourcemap']
    },
    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      noInfo: true
    },
    browsers: ['chrome']
  });
};
