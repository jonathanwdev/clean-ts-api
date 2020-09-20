module.exports = {
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  roots: [
    '<rootDir>/src'
  ],
  testEnvironment: 'node'
}
