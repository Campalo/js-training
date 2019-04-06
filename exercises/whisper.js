'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function whisper(str) {
    // return "*" + str.toLowerCase() + "*";
    return `*${str.toLowerCase()}*`;
    
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper('blabla'), "*blabla*")
assert.strictEqual(whisper("BOOM"), "*boom*")
assert.strictEqual(whisper.length, 1)
// End of tests */

