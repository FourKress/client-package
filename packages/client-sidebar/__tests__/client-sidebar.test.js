'use strict';

const clientSidebar = require('..');
const assert = require('assert').strict;

assert.strictEqual(clientSidebar(), 'Hello from clientSidebar');
console.info("clientSidebar tests passed");
