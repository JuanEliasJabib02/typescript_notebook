

/* Typescript has two way to assigns a type */

/* Implicit 
Implicit - TypeScript will "guess" the type, based on the assigned value:
 */
let bye = "string"

bye = 2

/* Explicit - writing out the type */
let hello: string = "string"
hello = true



/* Unable to Infer

TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to any which disables type checking. */

let album: any;

/* This type means that 
the data can be any type of data and
has to be used with care, this word
is deating the principal purpuse of typescript
only a  specific case
 */


const sum = (a: number, b: number) => {
  return a + b
}


/* Union Type */

let address: string | number;

/* The union type allow us to 
give two types of values to the data that will be store */

address = "direccion"
address = 43
address = true


/*  */

let re: RegExp = /\w+/g