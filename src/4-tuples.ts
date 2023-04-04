/* Typescript Tuples */


/**
 * A tuple is a typed array with a pre-defined length and types for each index.
Tuples are great because they allow each element in the array to be a known type of value.
To define a tuple, specify the type of each element in the array:
 */

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];


//As you can see we have a number, boolean and a string. But what happens if we try to set them in the wrong order:

// define our tuple
let ourTuple: [number, boolean, string];

// initialized incorrectly which throws an error
ourTuple = [false, 'Coding God was mistaken', 5];


/* GOOD PRACTICE */


/* A good practice is to make your tuple readonly 

Tuples only have strongly defined types for the initial values:*/

// define our tuple
let tuple: [number, boolean, string];
// initialize correctly
tuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
tuple.push('Something new and wrong');
console.log(tuple);

/* You see the new valueTuples only have strongly defined types for the initial values:
 */

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');

