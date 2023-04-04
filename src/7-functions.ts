
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