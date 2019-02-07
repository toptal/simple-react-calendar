// Jest configuration

module.exports = {
  collectCoverage: true,
  coverageDirectory: './coverage/',
  setupFiles: ['./test.js', 'jest-plugin-context/setup'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/__specs__/**/*.js'],
  testPathIgnorePatterns: ['/node_modules/', '/fixtures/', '/dist'],
}
