// create a class with readonly and optional properties static properties and static method
class Car {
    // readonly property
    readonly make: string;
    // optional property
    model?: string | undefined;
    // static property
    static numberOfWheels: number = 4;  
    // constructor  
    constructor(make: string, model?: string) {
        this.make = make;
        this.model = model;
    }
    // static method
    static getNumberOfWheels(): number {
        return Car.numberOfWheels;
    }
    // method to get car details
    getCarDetails(): string {
        return this.model ? `${this.make} ${this.model}` : this.make;
    }
    displayInfo= (): void=> {
        console.log(`Car Make: ${this.make}`);
        if (this.model) {
            console.log(`Car Model: ${this.model}`);
        }
        console.log(`Number of Wheels: ${Car.getNumberOfWheels()}`);
    }
}

// create instances of the class
let car1 = new Car("Toyota", "Corolla");
let car2 = new Car("Honda");

console.log("Car 1 Details:", car1.getCarDetails());
car1.displayInfo();
console.log("Car 2 Details:", car2.getCarDetails());

// Attempting to modify readonly property will result in an error
// car1.make = "Ford"; // Error: Cannot assign to 'make' because it is a read-only property.    

console.log("Number of Wheels (static):", Car.getNumberOfWheels());

