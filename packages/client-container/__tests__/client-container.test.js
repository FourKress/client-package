'use strict';

const clientContainer = require('..');
const assert = require('assert').strict;

assert.strictEqual(clientContainer(), 'Hello from clientContainer');
console.info('clientContainer tests passed');
