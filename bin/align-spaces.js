#!/usr/bin/env node

import process from 'node:process';
import fs from 'node:fs';
import {alignSpaces} from '../lib/align-spaces.js';

const [name] = process.argv.slice(2);

if (!name) {
    console.log('align-spaces <filename>');
    process.exit();
}

const str = fs.readFileSync(name, 'utf8');

fs.writeFileSync(name, alignSpaces(str));
