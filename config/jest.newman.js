module.exports = {
  ...require('./jest.common'),

  displayName: 'newman',

  runner: '<rootDir>/src/index.js',

  testMatch: ['<rootDir>/examples/**/*.test.js'],
};
