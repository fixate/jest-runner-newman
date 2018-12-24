const projects = [
  './config/jest.lint.js',
  //
  // './config/jest.newman.js',
];

module.exports = {
  ...require('./config/jest.common'),

  projects: projects.length === 1 ? projects.concat('./config/jest.dummy.js') : projects,
};
