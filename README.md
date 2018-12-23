# Jest Runner Newman

A Jest runner for Postman's [Newman](https://github.com/postmanlabs/newman) CLI tool.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Purpose](#purpose)
- [Install](#install)
- [Tests](#tests)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Purpose

Easily maintain and run your Postman collections using Newman and Jest.

## Install

```bash
$ npm install -D jest-runner-newman
```

```javascript
# jest.newman.js

module.exports = {
  displayName: 'newman',
  testMatch: ['<rootDir>/path/to/tests/**.test.js'],
  runner: 'jest-runner-newman',
}
```

```bash
npx jest -c jest.newman.js
```

## Tests

`jest-runner-newman` runs Newman tests in Node child processes. In addition to
running a Newman test via the `newman` module, each test needs to send the
parent process the result of the test run. To make this easier,
`jest-runner-newman` exports a separate module to specifically handle that:

```javascript
const {handleResult} = require('jest-runner-newman/handle-result')
const newman = require('newman');

module.exports = newman.run({
  collection: `[colllection-url]`,
  environment: `[envinroment-url]`,
  reporters: ['cli'],
  // any other newman configs
}, (err, result) => {
  handleResult(err, result);

  // whatever else you may want to output here
})
```

## License

MIT
