/* create a sample array and demonstrate various array methods in TypeScript. explain each method with comments.
push, pop, shift, unshift, splice, slice, indexof,includes,concat,toString
 */
// Creating a sample array
let sampleArray: number[] = [10, 20, 30, 40, 50];
console.log("Original Array:", sampleArray);
// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
sampleArray.push(60);
console.log("After push(60):", sampleArray);
// 2. pop() - Removes the last element from an array and returns that element.
let poppedElement: number | undefined = sampleArray.pop();
console.log("After pop():", sampleArray, "Popped Element:", poppedElement);
// 3. shift() - Removes the first element from an array and returns that element.
let shiftedElement: number | undefined = sampleArray.shift();
console.log("After shift():", sampleArray, "Shifted Element:", shiftedElement);
// 4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
sampleArray.unshift(5);
console.log("After unshift(5):", sampleArray);
// 5. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
sampleArray.splice(2, 1, 25); // At index 2, remove 1 element and add 25
console.log("After splice(2, 1, 25):", sampleArray);
// 6. slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
let slicedArray: number[] = sampleArray.slice(1, 4); // From index 1 to 3
console.log("Sliced Array (1,4):", slicedArray);
// 7. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index: number = sampleArray.indexOf(25);
console.log("Index of 25:", index);

let notFoundIndex: number = sampleArray.indexOf(100);
console.log("Index of 100 (not found):", notFoundIndex);

let indexFrom2: number = sampleArray.indexOf(40, 2);
console.log("Index of 40 from index 2:", indexFrom2);

// 8. includes() - Determines whether an array includes a certain value among its entries, returning true or false.     
let has30: boolean = sampleArray.includes(40);
console.log("Array includes 40:", has30);

let has40FromIndex3: boolean = sampleArray.includes(40, 3);
console.log("Array includes 40 from index 3:", has40FromIndex3);// false

// 9. concat() - Merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let newArray: number[] = sampleArray.concat([70, 80, 90]);
console.log("After concat([70, 80, 90]):", newArray);
// 10. toString() - Returns a string representing the specified array and its elements.
let arrayString: string = sampleArray.toString();
console.log("Array toString():", arrayString);

