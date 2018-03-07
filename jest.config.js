// Jest configuration

module.exports = {
  coverageDirectory: './coverage/',
  collectCoverage: true,
  testMatch: ['**/__specs__/**/*.js'],
  testPathIgnorePatterns: ['/node_modules/', '/fixtures/', '/dist'],
  setupFiles: ['./test.js', 'jest-plugin-context/setup'],
}
