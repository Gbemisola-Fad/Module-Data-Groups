/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test.todo("given an empty array, returns 0")
// sum.js
const sum = (arr) => {
    // If the input array is empty, return 0
    if (arr.length === 0) return 0;
    
    // Filter for valid numbers and sum them up
    return arr
        .filter(num => typeof num === 'number' && !isNaN(num)) // Keep only numbers
        .reduce((total, current) => total + current, 0); // Reduce to the sum
};

module.exports = sum;

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
// sum.test.js
const sum = require("./sum.js");

describe("Sum Function", () => {
    test("given an empty array, returns 0", () => {
        expect(sum([])).toBe(0);
    });

    test("given an array with just one number, returns that number", () => {
        expect(sum([5])).toBe(5);
    });

    test("given an array containing negative numbers, returns the correct total sum", () => {
        expect(sum([-5, -10, 5])).toBe(-10);
    });

    test("given an array with decimal/float numbers, returns the correct total sum", () => {
        expect(sum([1.5, 2.5, 3.0])).toBe(7.0);
    });

    test("given an array containing non-number values, ignores non-numerical values and returns the sum of the numerical elements", () => {
        expect(sum(['hey', 10, 'hi', 60, 10])).toBe(80);
    });

    test("given an array with only non-number values, returns 0", () => {
        expect(sum(['a', null, 'b'])).toBe(0);
    });
});

