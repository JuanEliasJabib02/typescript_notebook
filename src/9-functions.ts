/* Type script functions */


/* All the functions have to have a return type */


/* After the parameters we can type the return with the value that the function
gonna return */

function sum(a, b): number /* Type return */ {
  return a + b
}


/* But in some case the function doesnt return any value so we can use
the Void Type thats means that the function return nothing */

function Call(phone): void {
  console.log("claling phone")
}


/* Type parameters */

function BuySim(simNumber: number, client?/* Optional */: string) {
  console.log("Buying simcard...")
}


/* Optional parameters */

/* By default typescript will asume that all parameters are required, buy they can
be explicitly marked as optional using the ? operator we can seee in the above example */

