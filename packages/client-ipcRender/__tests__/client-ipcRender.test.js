'use strict';

const clientIpcrender = require('..');
const assert = require('assert').strict;

assert.strictEqual(clientIpcrender(), 'Hello from clientIpcrender');
console.info("clientIpcrender tests passed");
