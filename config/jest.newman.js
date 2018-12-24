module.exports = {
  ...require('./jest.common'),

  displayName: 'newman',

  runner: require.resolve('../src/index.js'),

  testMatch: ['<rootDir>/examples/**/*.test.js'],
};
