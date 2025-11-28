const {add} = require('./sample');

// Define a test suite.
// a collection of test for a specific functionality.

describe("Test addition of 2 numbers", () => { // defines a test suite
    test("Should add 2 positive numbers", () => { // test defines test
        const result = add(2,4);

        expect(result).toBe(6); // expect is used for assertion, assertion - correct -->  test succeeds, 
        // assertion wrong --> test fails

    })

    test("Should add 2 negative numbers", () => { 
        const result = add(-2,-4);

        expect(result).toBe(-6); 
    })
    test("Should add 1 positive and 1 negative numbers", () => { 
        const result = add(2,-4);

        expect(result).toBe(-2); 

    })

    test("Should accept two parameters", () => { 
        const result = add(2);

        expect(result).toBe(null); 

    })
    test("Should only accept numbers", () => { 
        const result = add("Jay");

        expect(result).toBe(null); 

    })
})      
