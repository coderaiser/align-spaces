#!/usr/bin/env node

'use strict';

const process = require('node:process');
const [name] = process.argv.slice(2);

if (!name) {
    console.log('align-spaces <filename>');
    process.exit();
}

const fs = require('node:fs');

const alignSpaces = require('..');

const str = fs.readFileSync(name, 'utf8');

fs.writeFileSync(name, alignSpaces(str));
