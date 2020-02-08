// Jest configuration

module.exports = {
  collectCoverage: true,
  coverageDirectory: "./coverage/",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/config/_jest/setupTests.js"],
  setupFilesAfterEnv: ['<rootDir>/config/_jest/setupAfterEnv.ts'],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testMatch: ["**/__specs__/**/*.tsx"],
  testPathIgnorePatterns: ["/node_modules/", "/fixtures/", "/dist"]
};
