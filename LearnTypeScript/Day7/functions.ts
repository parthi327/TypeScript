
/* In this document, we will explore different types of functions in TypeScript,
 including named functions, anonymous functions, and arrow functions. 
 We will also look at how to use parameters, return types, rest parameters, optional parameters, and default parameters in these functions.
 */


// **************************************************************************
// Named Functions
// A named function is a function that has a specific name.
// It can be called by its name from anywhere in the scope where it is defined.
// **************************************************************************


// Named function expression

//1. no param and no return type
function greet(): void {
    console.log("Hello, World!");
}

greet(); // Calling the function

//2. with param and return type
function add(a: number, b: number): number {
    return a + b;
}
console.log("Sum:", add(5, 10));

//3 function with rest parameters (allows passing variable number of arguments)

function sumAll(...numbers: number[]): number {
    let total: number = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log("Sum of all:", sumAll(1, 2, 3, 4, 5)); //   output: 15


//4 named function with rest parameters of different types only string and number

function displayInfo(...info: (string | number)[]): void {

    for (let item of info)
        console.log("Info:", item);

}

displayInfo("Alice", 25, "Engineer", "New York");// output: Alice, 25, Engineer, New York

// 5 Named function with optional parameter
// optional paramter should be last in the parameter list
function multiply(a: number, b?: number): number {
    if (b === undefined) {
        b = a * a; // if b is not provided, square a
    }
    return a * b;
}
console.log("Multiply with two params:", multiply(5, 3)); // 15
console.log("Multiply with one param:", multiply(4));    // 64


//6 Named fucntion with default parameter
function greetUser(name: string = "Guest"): void {
    console.log(`Hello, ${name}!`);
}
greetUser("Alice"); // Hello, Alice!
greetUser();        // Hello, Guest!


// **************************************************************************
// Anonymous function is a function that is defined without a name 
// It is often used as an argument to other functions or assigned to variables  
// ************************************************************************** 


//1. no param and no return type
let sayHello = function (): void {
    console.log("Hello from anonymous function!");
}
sayHello(); // Calling the anonymous function

//2. with param and return type
let subtract = function (a: number, b: number): number {
    return a - b;
}
console.log("Subtraction:", subtract(10, 3)); // 7
//3. anonymous function with rest parameters
let concatenate = function (...strings: string[]): string {
    return strings.join(" ");
}
console.log("Concatenated String:", concatenate("TypeScript", "is", "awesome!")); // TypeScript is awesome!

//4. anonymous function with optional parameter
let divide = function (a: number, b?: number): number {
    if (b === undefined) {
        b = 1; // if b is not provided, default to 1
    }
    return a / b;
}
console.log("Division with two params:", divide(10, 2)); // 5
console.log("Division with one param:", divide(10));    // 10
//5. anonymous function with default parameter
let power = function (base: number, exponent: number = 2): number {
    return base ** exponent;
}
console.log("Power with both params:", power(3, 3)); // 27
console.log("Power with one param:", power(4));    // 16
//6. anonymous function assigned to a variable with union type parameters
let displayData = function (...data: (string | number)[]): void {
    for (let item of data) {
        console.log("Data:", item);
    }
}
displayData("Bob", 30, "Designer", 5000); // output: Bob, 30, Designer, 5000


// **************************************************************************
// Arrow Functions
// Arrow functions provide a concise syntax for writing functions.
// They are often used for short functions or as callbacks.
// **************************************************************************

//1. no param and no return type
let welcome = (): void => {
    console.log("Welcome to Arrow Functions!");
}

welcome(); // Calling the arrow function
//2. with param and return type
let multiplyArrow = (a: number, b: number): number => {
    return a * b;
}
// without curly braces and return keyword for single expression

let multiplyArrow1 = (a: number, b: number): number => a * b;

console.log("Multiplication:", multiplyArrow(4, 5)); // 20

//3. arrow function with rest parameters    
let joinStrings = (...strings: string[]): string => {
    return strings.join(", ");
}
console.log("Joined Strings:", joinStrings("Apple", "Banana", "Cherry")); // Apple, Banana, Cherry

//4. arrow function with optional parameter 
let increment = (num: number, step?: number): number => {
    if (step === undefined) {
        step = 1; // default step is 1
    }
    return num + step;
}
console.log("Increment with both params:", increment(10, 2)); // 12
console.log("Increment with one param:", increment(10));    // 11

//5. arrow function with default parameter
let greetPerson = (name: string = "Visitor"): void => {
    console.log(`Hello, ${name}!`);
}
greetPerson("Charlie"); // Hello, Charlie!
greetPerson();        // Hello, Visitor!

//6. arrow function with union type parameters  
let showDetails = (...details: (string | number)[]): void => {
    for (let detail of details) {
        console.log("Detail:", detail);
    }
}
showDetails("Diana", 28, "Architect", "Los Angeles"); // output: Diana, 28, Architect, Los Angeles

