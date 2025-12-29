// create an interface with optional properties and method signatures in TypeScript
interface Employee {
    // required properties 
    id: number;
    name: string;
    // optional property
    department?: string | undefined;
    // method signatures
    getDetails(): string;
    getDepartment?(): string;
}
// implement the interface in a class
class FullTimeEmployee implements Employee {
    id: number;
    name: string;
    department?: string | undefined;
    // constructor
    constructor(id: number, name: string, department?: string) {    
        this.id = id;
        this.name = name;
        this.department = department;
    }
    // implement getDetails method
    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
    // implement getDepartment method
    getDepartment(): string {
        return this.department ? this.department : "No department assigned.";
    }
}
// create instances of the class
let emp1 = new FullTimeEmployee(1, "Alice", "HR");
let emp2 = new FullTimeEmployee(2, "Bob");
console.log(emp1.getDetails()); // ID: 1, Name: Alice
console.log(emp1.getDepartment()); // HR
console.log(emp2.getDetails()); // ID: 2, Name: Bob
console.log(emp2.getDepartment()); // No department assigned.


// implement the interface in another object


let emp3: Employee = {
    id: 3,  
    name: "Charlie",
    getDetails: function(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
};
console.log(emp3.getDetails()); // ID: 3, Name: Charlie
// Note: emp3 does not implement getDepartment as it is optional

//*****************************************  */

// interface inheritance
interface Manager extends Employee {
    // additional property
    teamSize: number;
    // additional method signature
    getTeamInfo(): string;
}
// implement the Manager interface in a class
class TeamManager implements Manager {
    id: number;
    name: string;
    teamSize: number;
    // constructor
    constructor(id: number, name: string, teamSize: number) {
        this.id = id;
        this.name = name;
        this.teamSize = teamSize;
    }
    // implement getDetails method
    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
    // implement getTeamInfo method
    getTeamInfo(): string {
        return `Manager ${this.name} manages a team of ${this.teamSize} members.`;
    }
}
// create an instance of the TeamManager class
let manager = new TeamManager(4, "Diana", 10);
console.log(manager.getDetails()); // ID: 4, Name: Diana
console.log(manager.getTeamInfo()); // Manager Diana manages a team of 10 members.
