const dedupe = require("./dedupe.js");
/*
Dedupe Array
// dedupe.js
const dedupe = (arr) => {
    return [...new Set(arr)];
};

module.exports = dedupe;

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test.todo("given an empty array, it returns an empty array");

// dedupe.test.js
const dedupe = require("./dedupe.js");

describe("Dedupe Function", () => {
    test("given an empty array, it returns an empty array", () => {
        expect(dedupe([])).toEqual([]);
    });

    test("given an array with no duplicates, it returns a copy of the original array", () => {
        const input = [1, 2, 3];
        expect(dedupe(input)).toEqual([1, 2, 3]);
    });

    test("given an array with strings, it removes the duplicate values", () => {
        expect(dedupe(['a', 'a', 'a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });

    test("given an array with numbers, it removes the duplicate values", () => {
        expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    });

    test("given an array with mixed types, it removes duplicates while preserving order", () => {
        expect(dedupe([1, 'a', 'b', 1, 2, 'a'])).toEqual([1, 'a', 'b', 2]);
    });
});
e 