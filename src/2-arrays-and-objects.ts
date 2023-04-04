

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
