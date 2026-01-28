/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array

// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test.todo("given an empty array, returns -Infinity");
// max.js
const max = (arr) => {
    if (arr.length === 0) return -Infinity; // Return -Infinity for empty arrays
    
    const validNumbers = arr.filter(num => typeof num === 'number' && !isNaN(num)); // Filter valid numbers
    
    if (validNumbers.length === 0) return NaN; // Return NaN if no valid numbers
    
    return Math.max(...validNumbers); // Return the maximum value
};

module.exports = max;


// Given an array with one number
// When passed to the max function
// Then it should return that number

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
// max.test.js
const max = require("./max.js");

describe("Max Function", () => {
    test("given an empty array, returns -Infinity", () => {
        expect(max([])).toBe(-Infinity);
    });

    test("given an array with one number, returns that number", () => {
        expect(max([5])).toBe(5);
    });

    test("given an array with both positive and negative numbers, returns the largest number overall", () => {
        expect(max([-5, 0, 15, 7])).toBe(15);
    });

    test("given an array with just negative numbers, returns the closest one to zero", () => {
        expect(max([-3, -9, -1])).toBe(-1);
    });

    test("given an array with decimal numbers, returns the largest decimal number", () => {
        expect(max([2.5, 3.1, 2.9])).toBe(3.1);
    });

    test("given an array with non-number values, returns the max and ignores non-numeric values", () => {
        expect(max([5, 'a', 2, null, 10])).toBe(10);
    });

    test("given an array with only non-number values, returns NaN", () => {
        expect(max(['a', null, 'b'])).toBeNaN();
    });
});
