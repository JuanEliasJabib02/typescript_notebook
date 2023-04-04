

/* In ttypescript exists
to ways to set a type in typescript */
let bye = "string"
let hello: string = "string"
/* Implicit 
In this type of declaration typescript inferring that im using a string,
Is not a strict set
 */
bye = 2
/* Explicit 
Is when we set the data that will have.
*/
hello = true


/* The any Type */

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