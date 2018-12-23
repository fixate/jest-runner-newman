const {rootDir} = require('./jest.common');

module.exports = {
  rootDir,

  displayName: 'lint',

  runner: 'jest-runner-eslint',

  testMatch: ['<rootDir>/src/**/*.js'],
};
