

/**
 * Type any
 * 
 * Any is a type that disables type checking and effectively allows all types to be used
 */


let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type


/* any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost.. */


/**
 * Unknown
 * 
 *Is a similar but safer alternative to any

 Typescript will prevent unknown types from being used.
 */

/*
unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.

Casting is when we use the "as" keyword to say property or variable is of the casted type */


/**
 * 
 * Type: never
 * 
 * never effectively throws an error whenever it is defined
 */

let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.


/* never is rarely used, especially by itself, its primary use is in advanced generics. */


/**
 * Type: undefined & null


undefined and null are types that refer to the JavaScript primitives undefined and null respectively.

 */

let y: undefined = undefined;
let z: null = null;