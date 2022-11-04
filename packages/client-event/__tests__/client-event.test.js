'use strict';

const clientEvent = require('..');
const assert = require('assert').strict;

assert.strictEqual(clientEvent(), 'Hello from clientEvent');
console.info("clientEvent tests passed");
