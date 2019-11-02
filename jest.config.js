// Jest configuration

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/calendar/**/*.tsx', 'src/calendar/helper/*.ts', '!src/calendar/stories/**/*.(ts|tsx)'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'gql', 'graphql', 'node'],
  testMatch: ['**/(test).(ts|tsx)'],
  testPathIgnorePatterns: ['/.storybook', '/ci', '/dist', '/lib', '/src/example'],
  roots: ['<rootDir>/src'],
}
