'use strict';

const {join} = require('node:path');
const {readFileSync} = require('node:fs');

const test = require('supertape');
const tryCatch = require('try-catch');

const alignSpaces = require('..');

const fixture = join(__dirname, 'fixture');
const pathNotAligned = join(fixture, 'not-aligned.js');
const pathAligned = join(fixture, 'aligned.js');

const aligned = readFileSync(pathAligned, 'utf8');
const notAligned = readFileSync(pathNotAligned, 'utf8');

test('align-spaces: no args', (t) => {
    const [e] = tryCatch(alignSpaces);
    
    t.equal(e.message, 'str should be a string!');
    t.end();
});

test('align-spaces: args', (t) => {
    const result = alignSpaces(notAligned);
    
    t.equal(result, aligned);
    t.end();
});
