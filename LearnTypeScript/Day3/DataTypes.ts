
/*
Premitive Data Types in TypeScript

TypeScript, being a superset of JavaScript, supports all the primitive data types available in JavaScript. Here are the primary primitive data types in TypeScript:
Number
String
Boolean
Null
Undefined
Any
Union Types
Here are examples of each primitive data type in TypeScript:
*/
// Number
let num: number = 42;
console.log("Number:", num);

// String
let str: string = "Hello, TypeScript!";
console.log("String:", str);
// use backticks for string interpolation
let greeting: string = `The number is ${num}`;
console.log("Greeting:", greeting);

// Boolean
let isActive: boolean = true;
console.log("Boolean:", isActive);

// Null
let n: null = null;
console.log("Null:", n);

// Undefined
let u: undefined = undefined;
console.log("Undefined:", u);

// any data type violates type safety
let anything: any = "Could be anything";
console.log(typeof anything);
console.log("Any:", anything);
anything = 100;
console.log(typeof anything);
console.log("Any after change:", anything);

// Union type to allow multiple types
let multiType: string | number;
multiType = "A string";
console.log("Union Type (string):", multiType);
multiType = 123;
console.log("Union Type (number):", multiType);

// void data type represents absence of any type   

function logMessage(message: string): void {
    console.log("Log Message:", message);
}

// function with returnValue 
function sum(a: number, b: number): number {
    return a + b;
}
console.log("Sum:", sum(5, 10));

/* // Symbol
let sym: symbol = Symbol("unique");
console.log("Symbol:", sym.toString());
// BigInt   
let bigIntNum: bigint = 9007199254741991n;
console.log("BigInt:", bigIntNum); */


/*
In addition to these primitive types, TypeScript also provides special types like 'any', 'unknown', 'never', and 'void' to handle more complex scenarios. However, the above-listed types are the fundamental primitive data types you'll encounter and use frequently in TypeScript programming.
*/ 
