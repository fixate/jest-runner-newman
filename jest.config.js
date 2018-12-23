module.exports = {
  ...require('./config/jest.common'),

  projects: [
    './config/jest.lint.js',
    // './config/jest.newman.js'
  ],
};
