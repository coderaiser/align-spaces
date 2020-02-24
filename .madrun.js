'use strict';

const {
    run,
    series,
    parallel,
} = require('madrun');

module.exports = {
    "test": () => 'tape \'test/*.js\'',
    "watch:test": () => 'nodemon -w lib -w test -x "npm test"',
    "lint": () => run('lint:*'),
    "putout": () => 'putout bin lib test',
    "lint:bin": () => 'eslint bin --rule \'no-console:0\' bin',
    "lint:lib": () => 'eslint lib test/*.js',
    "fix:lint": () => run(['putout', 'lint:*'], '--fix'),
    "coverage": () => 'nyc npm test',
    "report": () => 'nyc report --reporter=text-lcov | coveralls || true'
};

