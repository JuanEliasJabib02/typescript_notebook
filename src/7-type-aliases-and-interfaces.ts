/* TypeScript Type Aliases and Interfaces

TypeScript allows types to be defined separately from the variables that use them.

Aliases and Interfaces allows types to be easily shared between different variables/objects.
 */

/* Type Aliases

Type Aliases allow defining types with a custom name (an Alias).

Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
 */


type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};


/* INTERFACES

Interfaces are similar to type aliases, except they only apply to object types.

*/

interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};


/* Extending Interfaces

Interfaces can extend each other's definition.

Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
 */

interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};


//-------------------------------------------------------------------------------------------------------- COURSE NOTES


// Type Aliases

type stringOrNumber = string | number


type stringOrNumberArray = (string | number)[]

// Literal Types
let myName: "Juan"
myName = "Elias"



/* Functions */


/* This second type  tell that the functions returns */
const sum = (a: number, b: number): number => {
  return a + b
}

/* Void */

/* The work void is for function that returns nothing */
const logMsg = (message: any): void => {
  console.log(message)
}



// Rest parameters

const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr)
}


/* The never is used only to throw a error */
const createError = (errMsg: string): never => {
  throw new Error(errMsg)
}