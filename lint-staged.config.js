module.exports = {
  linters: {
    '**/*.md': ['doctoc --github', 'git add'],
    '**/*.js': ['prettier --write', 'git add'],
  },
};
