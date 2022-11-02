'use strict';

const clientPlugin = require('..');
const assert = require('assert').strict;

assert.strictEqual(clientPlugin(), 'Hello from clientPlugin');
console.info("clientPlugin tests passed");
