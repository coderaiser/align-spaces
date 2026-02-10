import {run} from 'madrun';

export default {
    'test': () => `tape 'test/*.js'`,
    'watch:test': () => 'nodemon -w lib -w test -x "npm test"',
    'lint': () => 'putout .',
    'fix:lint': () => run('lint', '--fix'),
    'coverage': () => 'c8 npm test',
    'report': () => 'c8 report --reporter=lcov',
};
