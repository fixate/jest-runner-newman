const {fork} = require('child_process');
const {fail, pass} = require('create-jest-runner');

const handleSummary = ({end, start, summary, testPath}) => {
  const {run, collection} = summary;
  const title = `Collection: ${collection.info.name}`;
  const testsPassed = run.failures.length === 0;

  return testsPassed
    ? pass({
        end,
        start,
        test: {
          path: testPath,
          title,
        },
      })
    : handleError({
        end,
        errorMessage: `${run.failures.length} tests failed`,
        start,
        testPath,
        title,
      });
};

const handleError = ({end, error, start, testPath, title}) => {
  return fail({
    end,
    start,
    test: {
      path: testPath,
      errorMessage: error,
      title,
    },
  });
};

const runTest = ({testPath}) => {
  const start = Date.now();
  const ls = fork(testPath);
  const end = Date.now();

  return new Promise(resolve => {
    ls.on('message', ({error, summary}) => {
      if (summary) {
        resolve(
          handleSummary({
            end,
            start,
            summary,
            testPath,
          })
        );
      }

      if (error) {
        resolve(handleError({start, end, testPath, error: error.help, title: 'Error'}));
      }
    });
  });
};

module.exports = runTest;
