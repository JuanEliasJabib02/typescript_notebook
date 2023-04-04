
/**
 * #TypeScript Arrays

Typescript has a specific syntax for typings arrays
 */

const names: string[] = [];
names.push("Juan"); // no error
names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

/* #READONLY

The readonly keyword can prevent arrays from being changed.
*/
const animals: readonly string[] = ["Dog"];
animals.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?


/**
 * #Type Inference
 * 
 * TypeScript can infer the type of an array if it has values.
 */

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error










/* --------------------------------------------------------------------------------- COURSE NOUTES */


/* Arrays */
let stringArr: string[] = ["Perro", "Gato"]


let guitars: number[] = ["strat", "les Paul", 5150]

/* Union with arrays

is not a strong link as the tuple
 */
let mixedData: (string | number | Boolean)[] = ["EVH", 1984, true]

let test: number[] = []
test.push("string")



/* 
The tuples are arrays with a strong link with his values
*/

let myTuple: [string, number, boolean] = ["Juan", 26, true]
myTuple[0] = 42
myTuple[4] = "Perro"



/* My objects */


let myObj: object

myObj = []
console.log(typeof myObj)
myObj = {}
myObj = myTuple
/* Is re-asignable because
in javascript many things are considerate a object */




const exampleObj = {
  prop1: 52,
  prop2: "dog"
}

/* By default typescript is using a implicit way of set the data */

/* F
or good practices we use
something called types for declarated how our object will look
 */

type Perro = {
  tail: string,
  age: number,
  albums?: (string | number)[]
  /* the ? means that the property is optional */
}


/* With the type we are telling that

the new value has to look like the type
 */
const Dante: Perro = {
  tail: "yes",
  age: 4
}


/* Interface and type works in the same way

interface is used when we going to declare
something that is a class
 */

interface User {
  name: string,
}
