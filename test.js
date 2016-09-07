let assert = require('assert');
let hello = require('./public/main').hello;
let plural = require('./public/main').plural;

assert.equal(hello('Test'), 'Hi, Test');
assert.equal(plural(0), 'раз');
assert.equal(plural(1), 'раз');
assert.equal(plural(2), 'раза');
assert.equal(plural(13), 'раз');
assert.equal(plural(15), 'раз');
assert.equal(plural(100), 'раз');

