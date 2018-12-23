const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '..'),

  testEnvironment: 'jest-environment-node',

  testMatch: ['<rootDir>/src/**/?(*.)test.js'],
};
