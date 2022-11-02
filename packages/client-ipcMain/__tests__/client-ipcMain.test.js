'use strict';

const clientIpcmain = require('..');
const assert = require('assert').strict;

assert.strictEqual(clientIpcmain(), 'Hello from clientIpcmain');
console.info("clientIpcmain tests passed");
