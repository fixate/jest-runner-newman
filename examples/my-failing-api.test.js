const newman = require('newman');
const {handleResult} = require('../src/handle-result');

module.exports = newman.run(
  {
    collection: require.resolve(`./failing.postman_collection.json`),
    reporters: ['cli'],
  },
  handleResult,
);
