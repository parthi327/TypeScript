// create in inherterience between classes in TypeScript with super, supper() and method overriding
class Animal {
    // property 
    name: string;
    // constructor
    constructor(name: string) {
        this.name = name;
    }
    // method
    makeSound(): string {
        return `${this.name} makes a sound.`;
    }
}

// derived class Dog inheriting from Animal
class Dog extends Animal {
    // constructor
    constructor(name: string) { 
        super(name); // call the super class constructor
    }
    // overriding method
    makeSound(): string {
        return `${this.name} barks.`;
    }
}

// derived class Cat inheriting from Animal
class Cat extends Animal {
    // constructor
    name: string=" Cat";
    constructor(name: string) {
        super(name); // call the super class constructor
    }
    // overriding method
    makeSound(): string {
        console.log(super.makeSound());
        return `${this.name} meows.`;
    }   
}
// create instances of the classes
let animal = new Animal("Generic Animal");
let dog = new Dog("Buddy");
let cat = new Cat("Whiskers");
console.log(animal.makeSound()); // Generic Animal makes a sound.
console.log(dog.makeSound()); // Buddy barks.
console.log(cat.makeSound()); //  Cat makes a sound. Cat meows.