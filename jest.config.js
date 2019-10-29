// Jest configuration

module.exports = {
  // collectCoverage: true,
  // coverageDirectory: './coverage/',
  setupFiles: ['<rootDir>/config/_jest/setupTests.js', 'jest-plugin-context/setup'],
  // snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/__tests__/**/*.js'],
  testPathIgnorePatterns: ['/node_modules/', '/fixtures/', '/dist'],
  testURL: 'http://localhost/',
}
