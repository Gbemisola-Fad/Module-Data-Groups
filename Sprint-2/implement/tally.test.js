const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

const tally = (items) => {
    if (!Array.isArray(items)) {
        throw new Error('Input must be an array');
    }

    return items.reduce((countMap, item) => {
        countMap[item] = (countMap[item] || 0) + 1;
        return countMap;
    }, {});
};

module.exports = tally;


// Given an empty array
// When passed to tally
// Then it should return an empty object
test.todo("tally on an empty array returns an empty object");

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

const tally = require("./tally.js");

describe('tally function', () => {
    test('tally on an empty array returns an empty object', () => {
        expect(tally([])).toEqual({});
    });

    test('tally with duplicate items returns counts for each unique item', () => {
        expect(tally(['a', 'a', 'a'])).toEqual({ a: 3 });
        expect(tally(['a', 'a', 'b', 'c'])).toEqual({ a: 2, b: 1, c: 1 });
    });

    test('tally with invalid input throws an error', () => {
        expect(() => tally("string")).toThrow('Input must be an array');
        expect(() => tally(42)).toThrow('Input must be an array');
        expect(() => tally(null)).toThrow('Input must be an array');
        expect(() => tally({})).toThrow('Input must be an array');
    });
});

