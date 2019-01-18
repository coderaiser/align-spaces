#!/usr/bin/env node

'use strict';

const [name] = process.argv.slice(2);

if (!name)
    return console.log('align-spaces <filename>');

const fs = require('fs');
const alignSpaces = require('..');

const str = fs.readFileSync(name, 'utf8');

fs.writeFileSync(name, alignSpaces(str));

