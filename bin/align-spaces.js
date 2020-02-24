#!/usr/bin/env node

'use strict';

const [name] = process.argv.slice(2);

if (!name) {
    console.log('align-spaces <filename>');
    process.exit();
}

const fs = require('fs');
const alignSpaces = require('..');

const str = fs.readFileSync(name, 'utf8');

fs.writeFileSync(name, alignSpaces(str));

