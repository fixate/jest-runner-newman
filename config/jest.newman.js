module.exports = {
  displayName: 'newman',

  runner: require.resolve('../src/index.js'),

  testMatch: ['src/**/*.test.js'],
};
