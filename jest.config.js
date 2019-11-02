// Jest configuration

module.exports = {
  collectCoverage: true,
  coverageDirectory: './coverage/',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/config/_jest/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/__specs__/**/*.tsx', '**/src/**/test.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/fixtures/', '/dist'],
}
