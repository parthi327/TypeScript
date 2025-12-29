/* tuples is a data structure that allows you to store a fixed number of elements where each element can have a different type.
 Tuples are useful when you want to group related values together, especially when the number of elements is known and fixed. */
// Defining a tuple
let person: [string, number, boolean] = ["Alice", 30, true];
console.log("Person Tuple:", person);
// Accessing tuple elements
let name: string = person[0];   
let age: number = person[1];
let isEmployed: boolean = person[2];
console.log(`Name: ${name}, Age: ${age}, Employed: ${isEmployed}`);


// Array of tuples
let employees: [string, number][] = [
    ["Bob", 25],
    ["Charlie", 28],
    ["Diana", 32]
];
console.log("Employees Array of Tuples:", employees);

// Extracting values from array of tuples
for (let [empName, empAge] of employees) {
    console.log(`Employee Name: ${empName}, Age: ${empAge}`);
}
extractValuesFromTuples(employees);

function extractValuesFromTuples(tuples: [string, number][]): void {
    for (let [empName, empAge] of tuples) {
        console.log(`Extracted Employee Name: ${empName}, Age: ${empAge}`);
    }
}