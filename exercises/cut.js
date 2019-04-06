'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')

assert.strictEqual(cutFirst('test'), 'st');
assert.strictEqual(cutFirst('lolipop'), 'lipop');
assert.strictEqual(cutLast('test'), 'te');
assert.strictEqual(cutLast('lolipop'), 'lolip'); 
assert.strictEqual(cutFirstLast('test'), '');
assert.strictEqual(cutFirstLast('lolipop'), 'lip');


// End of tests */
