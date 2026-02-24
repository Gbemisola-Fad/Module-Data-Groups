const createLookup = require("./lookup.js");

test.todo("creates a country currency code lookup for multiple codes");

/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

 const createLookup = (countryCurrencyPairs) => {
    if (!Array.isArray(countryCurrencyPairs)) {
        throw new Error('Input must be an array');
    }

    return countryCurrencyPairs.reduce((lookup, [countryCode, currencyCode]) => {
        lookup[countryCode] = currencyCode;
        return lookup;
    }, {});
};

module.exports = createLookup;

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/
const createLookup = require("./lookup.js");

describe('createLookup function', () => {
    test('creates a country currency code lookup for multiple codes', () => {
        const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD']];
        const expectedLookup = {
            'US': 'USD',
            'CA': 'CAD'
        };
        expect(createLookup(countryCurrencyPairs)).toEqual(expectedLookup);
    });

    test('returns an empty object when given an empty array', () => {
        expect(createLookup([])).toEqual({});
    });

    test('throws an error if the input is not an array', () => {
        expect(() => createLookup({})).toThrow('Input must be an array');
        expect(() => createLookup(null)).toThrow('Input must be an array');
        expect(() => createLookup(42)).toThrow('Input must be an array');
        expect(() => createLookup('string')).toThrow('Input must be an array');
    });
});


