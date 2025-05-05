// Implement and test a basic shopping cart module. The module should include the 
// following methods: 
// 1. addItem(cart, item, quantity): Adds an item to the cart. 
// 2. removeItem(cart, item): Removes an item from the cart. 
// 3. getTotalcart(cart): Returns the total number of items in the cart.
// Tasks 
// 1. Define the Module: 
//      ○ Create a file named cart.js and define the required methods. 
//      ○ Export the methods using module.exports.

//TASK 1


let totalItems;    //initialize variables
let totalDifItems;

let cart = {  //define cart
    "apple": 3,
    "syrup": 1,
    "tissue": 2
};
// console.log(cart);

function addItem(item, quantity) {  //FUNCTION: if item exists increase quantity else add the item and quantity to cart
    if (quantity < 1) {    //Handles a quantity less than 1
        console.log ("Invalid.  addItem quantity must be greater than 0");
        return;
    } else {
        if (cart[item]) {
            cart[item] += quantity;
        } else {
            cart[item] = quantity;
        }
    }   let message = (`There are now ${cart[item]} ${item}s in the cart.`);
        return message;
}

function removeAnItem(item, quantity) {  //FUNCTION:  if item exists decrease quantity, remove from list if less than 0, return a message if the item isn't in the cart
    if (cart[item]) {
        cart[item] -= quantity;
        if (cart[item] < 1) {
            delete cart[item];
            console.log (`There are now no ${item}s left in the cart.`);
        } else {
             console.log(`${cart[item][quantity]} ${item}s remain in the cart.`);
        };
    } else {
        console.log(`${item} is not in the shopping cart.`);
    }
}

function getCartTotal() {     //gets the total number of items in the cart and the total different types of item
    totalDifItems = Object.keys(cart).length;
    totalItems = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
    console.log(`There are ${totalDifItems} different items in the cart with a total quantity of ${totalItems} items.`); 
    return { totalDifItems, totalItems}
}


module.exports = { addItem, removeAnItem, getCartTotal, cart, }   //exports for tests
