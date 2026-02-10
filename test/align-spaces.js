import {join} from 'node:path';
import {readFileSync} from 'node:fs';
import {test} from 'supertape';
import {tryCatch} from 'try-catch';
import {alignSpaces} from '../lib/align-spaces.js';

const fixture = new URL('fixture', import.meta.url).pathname;
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
