'use strict';

const clientIm = require('..');
const assert = require('assert').strict;

assert.strictEqual(clientIm(), 'Hello from clientIm');
console.info("clientIm tests passed");
