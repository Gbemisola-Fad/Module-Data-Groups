// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
invert({ a: 1 });


// b) What is the current return value when invert is called with { a: 1, b: 2 }
invert({ a: 1, b: 2 });


// c) What is the target return value when invert is called with {a : 1, b: 2}
{
  "1": "a",
  "2": "b"
}


// c) What does Object.entries return? Why is it needed in this program?
Object.entries({ a: 1, b: 2 });
// Returns: [['a', 1], ['b', 2]]


// d) Explain why the current return value is different from the target output
function invert(obj) {
    const invertedObj = {};

    for (const [key, value] of Object.entries(obj)) {
        invertedObj[value] = key; // Correct assignment
    }

    return invertedObj;
}

module.exports = invert;


// e) Fix the implementation of invert (and write tests to prove it's fixed!)
const invert = require("./invert.js");

describe('invert function', () => {
    test('invert with single key-value pair', () => {
        expect(invert({ a: 1 })).toEqual({ "1": "a" });
    });

    test('invert with multiple key-value pairs', () => {
        expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
    });

    test('invert handles values that are not unique', () => {
        expect(invert({ x: 10, y: 20, z: 10 })).toEqual({ "10": "z", "20": "y" });
    });

    test('invert handles empty object', () => {
        expect(invert({})).toEqual({});
    });
});

