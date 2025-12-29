// Arithmetic Operators
let a: number = 10;
let b: number = 3;  
console.log("Addition:", a + b); // 13
console.log("Subtraction:", a - b); // 7        
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b); // 3.3333
console.log("Modulus:", a % b); // 1
console.log("Exponentiation:", a ** b); // 1000
// Assignment Operators
let c: number = 5;
console.log("Initial c:", c);   
c += 2; // c = c + 2
console.log("After += 2:", c);
c -= 1; // c = c - 1
console.log("After -= 1:", c);
c *= 3; // c = c * 3               
console.log("After *= 3:", c);
c /= 2; // c = c / 2
console.log("After /= 2:", c);
c %= 4;

console.log("After %= 4:", c);
// Comparison Operators
let x: number = 10;     
let y: number = 20;
console.log("x == y:", x == y); // false
console.log("x != y:", x != y); // true
console.log("x > y:", x > y);   
console.log("x < y:", x < y); // true
console.log("x >= y:", x >= y); // false
console.log("x <= y:", x <= y); // true
// Strict Equality Operators 
// example of strict equality with different types
let strNum: string = "10";
// console.log("x === strNum:", x === strNum); // false
// console.log("x !== strNum:", x !== strNum); // true

// Logical Operators
let p: boolean = true;  
let q: boolean = false;
console.log("p && q:", p && q); // false
console.log("p || q:", p || q); // true
console.log("!p:", !p);
console.log("!q:", !q);

// combine logical operators and relational operators
let age1: number = 25;
let hasLicense: boolean = true;
console.log("Can drive:", age1>= 18 && hasLicense);


// increment and Decrement Operators
let count: number = 0;
console.log("Initial count:", count);
count++; // Post-increment
console.log("After count++:", count);
++count; // Pre-increment
console.log("After ++count:", count);
count--; // Post-decrement
console.log("After count--:", count);
--count;    // Pre-decrement    
console.log("After --count:", count);

// Ternary Operator syntax: condition ? exprIfTrue : exprIfFalse;
let score: number = 85;
let grade: string = score >= 60 ? "Pass" : "Fail";
