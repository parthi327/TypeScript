/*  *********** Advanced Array Methods ***********  */
// Creating a sample array
let advancedArray: number[] = [1, 2, 3, 4, 5];
console.log("Original Array:", advancedArray);

// forEach , map , filter , reduce , find , findIndex , some , every , flat , flatMap

// 1. forEach() - Executes a provided function once for each array element.
console.log("Using forEach():");
advancedArray.forEach((value, index) => {
    console.log(`Index ${index}: Value ${value}`);
});

// 2. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.
let mappedArray: number[] = advancedArray.map(value => {
    return value * 2
});
console.log("Mapped Array (value * 2):", mappedArray);

// 3. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
let filteredArray: number[] = advancedArray.filter(value => value % 2 === 0);
console.log("Filtered Array (even numbers):", filteredArray);

// 4. reduce() - Executes a reducer function on each element of the array, resulting in a single output value.
let sum = advancedArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log("Sum of all elements using reduce():", sum);
// 5. find() - Returns the value of the first element in the array that satisfies the provided testing function.
let foundElement: number | undefined = advancedArray.find(value => value > 3);
console.log("First element greater than 3 using find():", foundElement);    
// 6. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function.
let foundIndex: number = advancedArray.findIndex(value => value > 3);
console.log("Index of first element greater than 3 using findIndex():", foundIndex);    

// 7. some() - Tests whether at least one element in the array passes the test implemented by the provided function.
let hasEvenNumber: boolean = advancedArray.some(value => value % 2 === 0);
console.log("Array has at least one even number using some():", hasEvenNumber); 

// 8. every() - Tests whether all elements in the array pass the test implemented by the provided function.
let allPositive: boolean = advancedArray.every(value => value > 0);
console.log("All elements are positive using every():", allPositive);


// 9. flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedArray: (number | number[])[] = [1, 2, [3, 4], [5,  7]];
let flattenedArray: number[] = nestedArray.flat(2); // Flattening to depth 2
console.log("Flattened Array using flat():", flattenedArray); //      
// 10. flatMap() - First maps each element using a mapping function, then flattens the result into a new array.
let flatMappedArray: number[] = advancedArray.flatMap(value => [value, value * 10]);
console.log("FlatMapped Array using flatMap():", flatMappedArray);  
// Each method above demonstrates advanced array manipulations in TypeScript.   





