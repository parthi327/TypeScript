/*Looping statements are used to execute a block of code repeatedly until a specified condition is met. TypeScript supports several types of looping statements, including `for`, `while`, and `do...while` loops.
*/
//while loop
let i: number = 0;
console.log("While Loop:"); 
while (i < 5) {
    console.log(i);
    i++;
}
//do...while loop
let j: number = 0;
console.log("Do...While Loop:");    
do {
    console.log(j);
    j++;
} while (j < 5);
//for loop
console.log("For Loop:");
for (let k: number = 0; k < 5; k++) {
    console.log(k);
}   
//for...of loop (used to iterate over iterable objects like arrays)
let arr: number[] = [10, 20, 30, 40, 50];
console.log("For...Of Loop:");  
for (let value of arr) {
    console.log(value);
}   
//break statement to exit a loop prematurely
console.log("Break Statement in Loop:");    
for (let m: number = 0; m < 10; m++) {
    if (m === 5) {
        break; // exit the loop when m is 5
    }   
    console.log(m);
}
//continue statement to skip the current iteration and proceed to the next one
console.log("Continue Statement in Loop:");    
for (let n: number = 0; n < 10; n++) {
    if (n % 2 === 0) {
        continue; // skip even numbers
    }   
    console.log(n); // will print only odd numbers
}   


//for...in loop (used to iterate over the properties of an object)
let obj: { [key: string]: number } = { a: 1, b: 2, c: 3 };
console.log("For...In Loop:");  
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}   

