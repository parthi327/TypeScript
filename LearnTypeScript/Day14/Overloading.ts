// create a class with method and constructor overloading
class Calculator {
    // method overloading
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        return a + b;
    }   
    // constructor overloading
    constructor();
    constructor(initialValue: number);
    constructor(initialValue?: number) {
        if (initialValue !== undefined) {
            console.log(`Calculator initialized with value: ${initialValue}`);
        } else {
            console.log("Calculator initialized with default value.");
        }
    }
}
// create instances of the class
let calc1 = new Calculator();
let calc2 = new Calculator(10);
console.log("Addition of numbers (5 + 10):", calc1.add(5, 10));
console.log("Addition of strings ('Hello, ' + 'World!'):", calc2.add("Hello, ", "World!"));
