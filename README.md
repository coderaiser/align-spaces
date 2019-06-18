# Align Spaces [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[NPMIMGURL]:                https://img.shields.io/npm/v/align-spaces.svg?style=flat&longCache=true
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/align-spaces/master.svg?style=flat&longCache=true
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/align-spaces.svg?style=flat&longCache=true
[NPMURL]:                   https://npmjs.org/package/align-spaces "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/align-spaces  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/align-spaces "Dependency Status"

[CoverageURL]:              https://coveralls.io/github/coderaiser/align-spaces?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/align-spaces/badge.svg?branch=master&service=github

Align spaces on empty lines of a source code.

## Install

```
npm i align-spaces -g
```

## Usage

```
align-spaces unaligned.js
```

## API

`align-spaces` can be used as a library:

```js
const alignSpaces = require('align-spaces');

alignSpaces(`
const t = 'hello';

module.exports = () => {
    cosnt m = 'world';

    return t + m;
};
`);
// returns
`
const t = 'hello';

module.exports = () => {
    cosnt m = 'world';
....    
    return t + m;
};
`
```

## Related

- [eslint-remove-line](https://github.com/coderaiser/eslint-remove-line) - `eslint --fix` for [unused variables](https://eslint.org/docs/rules/no-unused-vars).
- [putout](https://github.com/coderaiser/putout) - the pluggable code transformer.

## License

MIT

