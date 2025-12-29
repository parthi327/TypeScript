/*
Call back functions in TypeScript with an example.
In TypeScript, a callback function is a function that is passed as an argument to another function and
is executed after some operation has been completed.
Callbacks are commonly used for asynchronous operations, event handling, and functional programming.

*/

// A function that takes a callback function as an argument 
function greetUser(name: string, callback: (greetingMessage: string) => void): void {
    const message = `Hello, ${name}! Welcome to TypeScript Callbacks.`;
    callback(message); // Execute the callback function with the greeting message
}
// A callback function that logs the greeting message to the console
function logGreeting(message: string): void {
    console.log(message);

}
// Using the greetUser function with logGreeting as the callback
greetUser("Alice", logGreeting);

// Another example with a different callback function
function alertGreeting(message: string): void {
    // Simulating an alert (in a real browser environment, you would use alert(message))
    console.log("ALERT:", message);
}
greetUser("Bob", alertGreeting);



// Example of using an anonymous function as a callback
greetUser("Charlie", function (message: string): void {
    console.log("Anonymous Callback:", message);
});
// Example of using an arrow function as a callback
greetUser("Diana", (message: string): void => {
    console.log("Arrow Function Callback:", message);
});
// This demonstrates how callback functions can be used in TypeScript to handle operations after a function completes its task.
// Callbacks are especially useful in asynchronous programming, such as handling API responses or user interactions.



/* ************************************************Function Overloading in TypeScript***********************************************

In languages like Java or C#, you would simply write two separate functions with the same name but different parameters (this is called Method Overloading).
In TypeScript (and JavaScript), we don't do this for one fundamental reason: JavaScript does not support multiple functions with the same name in the same scope.
1. The "Single Implementation" Constraint
In Java, the virtual machine (JVM) can distinguish between calculateArea(int r) and calculateArea(int l, int w) at runtime.
However, TypeScript compiles into JavaScript. In JavaScript, if you define two functions with the same name, the second one simply overwrites the first. To solve this, TypeScript uses a "Split" approach:
Overload Signatures: Multiple lines that tell the compiler what is allowed.
Implementation Signature: One single block of code that handles all those cases using logic (like if statements).
 */

function overloadingExample(a: number): number;
function overloadingExample(a: string): string;
function overloadingExample(a: number | string): number | string {
    if (typeof a === "number") {
        return a * 2;
    } else {
        return a + "!";
    }
}
console.log(overloadingExample(5)); // Output: 10
console.log(overloadingExample("Hello")); // Output: Hello!

// function overloading with same return types in TypeScript
function calculateArea(radius: number): number;
function calculateArea(length: number, width: number): number;
function calculateArea(arg1: number, arg2?: number): number {
    if (arg2 === undefined) {
        return Math.PI * arg1 * arg1; // Area of circle
    }

    return arg1 * arg2; // Area of rectangle
}
console.log(calculateArea(5)); // Output: Area of circle
console.log(calculateArea(4, 6)); // Output: Area of rectangle


// function overload with different return types
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    throw new Error("Invalid arguments");
}
console.log(combine(5, 10)); // Output: 15
console.log(combine("Hello", "World")); // Output: Hello World
// console.log(combine(5, "World")); // Throws Error: Invalid arguments
// Note: The last call will throw an error because the arguments are of different types.
