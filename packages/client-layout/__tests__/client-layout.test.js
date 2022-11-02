'use strict';

const clientLayout = require('..');
const assert = require('assert').strict;

assert.strictEqual(clientLayout(), 'Hello from clientLayout');
console.info("clientLayout tests passed");
