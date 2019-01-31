var babelConfig = require('./.babelrc')

// Jest configuration

module.exports = {
  collectCoverageFrom: ['src/src/**/*.{ts,tsx}'],
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: ['/node_modules/'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      babelConfig: babelConfig,
    }
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['/node_modules/'],
  modulePaths: ['<rootDir>/src/src'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  resetMocks: true,
  setupFiles: ['jest-plugin-context/setup', './config/setupTest.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist', '/lib/', '/docs/', '/config'],
  testRegex: 'test\\.(ts|tsx|js|jsx)$',
  timers: 'fake',
}
