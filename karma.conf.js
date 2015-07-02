process.env.NODE_ENV = 'test';

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      'node_modules/react/dist/react-with-addons.js',
      'node_modules/lodash/index.js',
      'tests/**/*_spec.js'
    ],
    preprocessors: {
      'tests/**/*.js': ['webpack', 'sourcemap']
    },
    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      noInfo: true
    },
    browsers: ['PhantomJS2']
  });
};
