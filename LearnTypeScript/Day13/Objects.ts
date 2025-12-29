// objects in TypeScript using object TypeScript
// Object Methods in TypeScript
/* create a sample object and demonstrate various object methods in TypeScript. explain each method with comments.
assign, keys, values, entries, freeze, seal, hasOwnProperty, isFrozen, isSealed 
*/
// Creating a sample object
// let employee:object = {// incorrect way
let employee= {
    name: "Alice",
    age: 30, 
    profession: "Engineer",
    getDetails: function():string   {
        return `${this.name}, ${this.age} years old, works as a ${this.profession}.`;
    }
}
// access object properties and methods
// way1
console.log("Original Object:", employee);
console.log(employee.age);
console.log(employee.getDetails());
// way2
console.log(employee["profession"]);
console.log(employee["getDetails"]());

// ****************************

// object using inline type annotation
let manager: { name: string; age: number; department: string; getDetails: () => string } = {
    name: "Bob",
    age: 40,
    department: "Sales",
    getDetails: function():string { // can't use arrow function here because of this keyword the reason is arrow function doesn't have its own this
        return `${this.name}, ${this.age} years old, works in ${this.department} department.`;
    }
};

console.log("Manager Object:", manager);
console.log(manager.getDetails());      

//*************************          Using Type Alias only applicable for TS                */
// create new names for existing types using type alias 
type Employee = {
    name: string;
    age: number;
    profession: string;
    getDetails: () => string;
};
let developer: Employee = {
    name: "Charlie",
    age: 28,
    profession: "Developer",
    getDetails: function():string {
        return `${this.name}, ${this.age} years old, works as a ${this.profession}.`;
    }  
};
console.log("Developer Object:", developer);
console.log(developer.getDetails());

let tester: Employee = {
    name: "Diana",
    age: 32,
    profession: "Tester",
    getDetails: function():string {
        return `${this.name}, ${this.age} years old, works as a ${this.profession}.`;
    }  
};

// intersection types
type ContactInfo = {
    email: string;
    phone: string;
};  
type FullEmployee = Employee & ContactInfo;
let fullStackDev: FullEmployee = {
    name: "Eve",
    age: 29,
    profession: "Full Stack Developer",
    email: "",
    phone: "",
    getDetails: function():string {
        return `${this.name}, ${this.age} years old, works as a ${this.profession}. Contact: ${this.email}, ${this.phone}`;
    }  
};
console.log("Full Stack Developer Object:", fullStackDev);
console.log(fullStackDev.getDetails());


