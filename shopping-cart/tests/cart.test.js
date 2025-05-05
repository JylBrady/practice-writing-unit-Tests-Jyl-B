// TASK 2. Write Unit Tests: 
//      ○ Create a tests folder and add a file named cart.test.js. 
//      ○ Write tests for each method in the cart.js module, covering: 
            // ■ Positive Tests: Valid inputs producing expected results. 
            // ■ Negative Tests: Invalid inputs handled gracefully. 
            // ■ Edge Cases: Unusual or extreme values. 
// TASK 3. Run the Tests: 
//      ○ Use npm test to execute the tests and verify that all pass. 
// TASK 4. Refactor: 
    // ○ If any tests fail, modify the implementation in cart.js to pass all tests. 


    // Example Scenarios for Testing: 
// 1. addItem 
        // ○ Positive: Add a new item with a valid name and quantity. 
        // ○ Negative: Add an item with a negative quantity. 
        // ○ Edge Case: Add an item with a quantity of 0. 
// 2. removeItem 
        // ○ Positive: Remove an existing item from the cart. 
        // ○ Negative: Attempt to remove an item not in the cart.
        // ○ Edge Case: Remove the last item from the cart. 
//  3. getTotalItems 
        // ○ Positive: Calculate the total number of items correctly. 
        // ○ Negative: Handle an empty cart. 
        // ○ Edge Case: Calculate with large quantities. 


const { addItem, removeAnItem, getCartTotal, cart } = require('../cart.js');

describe("cart functions", () => {
    
    test("Should add a new item to the cart ", () => {  //addItem TEST (new): Positive
        addItem(`pineapple`, 3);
        expect(cart.pineapple).toBe(3);
    });
    
    test("Should add an addition quantity of an item to the cart ", () => {  //addItem TEST (existing):  Positive
        addItem(`apple`, 3);
        expect(cart.apple).toBe(6);
    });

    test("should not allow a quantity less than 1", () => {   //addItem TEST:  Negative
        console.log = jest.fn(); // creates a "dummy" console.log for testing
        addItem('coffee', -3)
        expect(console.log).toHaveBeenCalledWith("Invalid.  addItem quantity must be greater than 0");
    });

    test("should not allow a quantity less than 1", () => {   //addItem TEST:  Edge
        console.log = jest.fn(); // creates a "dummy" console.log for testing
        addItem('cucumber', 0)
        expect(console.log).toHaveBeenCalledWith("Invalid.  addItem quantity must be greater than 0");
    });


    test("Should Remove an item from cart", () => {   //Remove item:  Not in Cart (Negative)
        removeAnItem(`syrup`, 1);
        expect(cart.syrup).toBeUndefined();
    });
    
    test("Should Decrease quantity of an item from cart", () => {  //Remove Item:  positive
        removeAnItem(`tissue`, 1);
        expect(cart.tissue).toBe(1);
    });

    test ("Should calculate the total number of items in the cart", () => {  //CALCULATE Total:  Positive
        const result = getCartTotal();
        expect(result.totalDifItems).toBe(3);
        expect(result.totalItems).toBe(10);
    });

    test ("Should calculate the total number of items in the cart", () => {  //CALCULATE Total: Negative
        Object.keys(cart).forEach(key => delete cart[key]);  //empties cart
        const result = getCartTotal();  //runs function
        expect(result.totalDifItems).toBe(0);
        expect(result.totalItems).toBe(0);
    });
});
