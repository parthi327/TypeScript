// String Methods in TypeScript
/* create a sample string and demonstrate various string methods in TypeScript. explain each method with comments.
charAt, charCodeAt, concat, includes, indexOf, lastIndexOf, replace, slice, split, toLowerCase, toUpperCase, trim 
*/
// Creating a sample string
let sampleString: string = "  Hello, TypeScript World!  ";
console.log("Original String:", `"${sampleString}"`);
// 1. charAt() - Returns the character at the specified index.
let charAt5: string = sampleString.charAt(5);
console.log("Character at index 5 using charAt():", `"${charAt5}"`);    
// 2. charCodeAt() - Returns the Unicode of the character at the specified index.
let charCodeAt5: number = sampleString.charCodeAt(5);
console.log("Unicode of character at index 5 using charCodeAt():", charCodeAt5);    
// 3. concat() - Combines two or more strings and returns a new string.
let concatenatedString: string = sampleString.concat(" Let's learn TypeScript.");
console.log("Concatenated String using concat():", `"${concatenatedString}"`);
// 4. includes() - Determines whether one string may be found within another string, returning true or false.
let includesTypeScript: boolean = sampleString.includes("TypeScript");
console.log("String includes 'TypeScript' using includes():", includesTypeScript);
// 5. indexOf() - Returns the index of the first occurrence of a specified value in a string, or -1 if not found.
let indexOfTypeScript: number = sampleString.indexOf("TypeScript");
console.log("Index of 'TypeScript' using indexOf():", indexOfTypeScript);
// 6. lastIndexOf() - Returns the index of the last occurrence of a specified value in a string, or -1 if not found.
let lastIndexOfSpace: number = sampleString.lastIndexOf(" ");
console.log("Last index of space using lastIndexOf():", lastIndexOfSpace);
// 7. replace() - Returns a new string with some or all matches of a pattern replaced by a replacement.
let replacedString: string = sampleString.replace("World", "Universe");
console.log("Replaced String using replace():", `"${replacedString}"`);
// 8. slice() - Extracts a section of a string and returns it as a new string.
let slicedString: string = sampleString.slice(2, 7);    
console.log("Sliced String (2,7) using slice():", `"${slicedString}"`);
// 9. split() - Splits a string into an array of substrings based on a specified separator.
let splitString: string[] = sampleString.trim().split(" "); 
console.log("Split String using split():", splitString);
// 10. toLowerCase() - Converts the entire string to lowercase letters.
let lowerCaseString: string = sampleString.toLowerCase();
console.log("Lowercase String using toLowerCase():", `"${lowerCaseString}"`);
// 11. toUpperCase() - Converts the entire string to uppercase letters. 
let upperCaseString: string = sampleString.toUpperCase();
console.log("Uppercase String using toUpperCase():", `"${upperCaseString}"`);
// 12. trim() - Removes whitespace from both ends of a string.
let trimmedString: string = sampleString.trim();
console.log("Trimmed String using trim():", `"${trimmedString}"`);

// 13. substring() - Extracts a section of a string and returns it as a new string.
let substringString: string = sampleString.substring(2, 7);
console.log("Substring (2,7) using substring():", `"${substringString}"`);

// Each method above demonstrates common string manipulations in TypeScript.
