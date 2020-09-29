module.exports = {
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  roots: [
    '<rootDir>/src'
  ],
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/protocols/'
  ]

}
