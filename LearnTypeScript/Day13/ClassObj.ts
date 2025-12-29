// Create Object using class in TypeScript

class Person {
    // properties
    name: string;
    age: number;
    profession: string;
    // constructor
    constructor(name: string, age: number, profession: string) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }   
    // method
    getDetails(): string {
        return `${this.name}, ${this.age} years old, works as a ${this.profession}.`;
    }
}   
// create instances of the class
let person1 = new Person("Eve", 29, "Designer");
let person2 = new Person("Frank", 35, "Architect");
console.log("Person 1:", person1);
console.log(person1.getDetails());
console.log("Person 2:", person2);
console.log(person2.getDetails());
// Using access modifiers