'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(str) {
  let wordArray = str.split(' ');  // "How are you ?" -> ['How', 'are', 'you', '?']
  for (let i = 0; i < wordArray.length; i++) {
    wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1).toLowerCase()
  }  // ['How', 'are', 'you', '?'] -> ['How', 'Are', 'You', '?']
  return wordArray.join(' '); // ['How', 'Are', 'You', '?'] -> "How Are You ?"
}

//     return str
//       .split(' ')     // "How are you ?" -> ['How', 'are', 'you', '?']
//       .map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//       })              // ['How', 'are', 'you', '?'] -> ['How', 'Are', 'You', '?']
//       .join(' ');     // ['How', 'Are', 'You', '?'] -> "How Are You ?"


//       split     map      join
// string => array => array => string

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('heho hehooo'), 'Heho Hehooo')
assert.strictEqual(jadenCase('I love you'), 'I Love You')


// End of tests */
