//Arrays  using leterals  
let fruits: string[] = ["Apple", "Banana", "Cherry"];
let numbers: number[] = [1, 2, 3, 4, 5];
let mixed: (string | number)[] = ["Hello", 42, "World", 100];

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Mixed:", mixed);

//Arrays using Array generic type
let veggies: Array<string> = ["Carrot", "Broccoli", "Spinach"];
let scores: Array<number> = [10, 20, 30, 40];
let mixedArray: Array<string | number> = ["TypeScript", 2024, "JavaScript", 2025];
console.log("Veggies:", veggies);
console.log("Scores:", scores);
console.log("Mixed Array:", mixedArray);

// Accessing array elements
console.log("First fruit:", fruits[0]); //carrot
console.log("Second number:", numbers[1]); // output: 20
console.log("First mixed element:", mixed[0]); // TypeScript
// Example of using an anonymous function as a callback

// Extracting values

// using for loop and index
for (let i = 0; i < veggies.length; i++) {
    console.log(`Veggie at index ${i}:`, veggies[i]);
}

//using for in loop
for (let index in numbers) {
    console.log(`Number at index ${index}:`, numbers[index]);
}

// using for..of loop
for (let score of scores) {
    console.log("Score:", score);
}


// find a number present in numbers array using for amd function returns boolean
let searchNumber: number = 3;
function findNumber(arr: number[], target: number): boolean {
    for (let num of arr) {
        if (num === target) {
            return true;
        }
    }   
    return false;
}
console.log(`Is ${searchNumber} present in numbers array?`, findNumber(numbers, searchNumber));

