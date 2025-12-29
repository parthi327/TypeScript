/*
Conditional statements are used to perform different actions based on different conditions.
In TypeScript, you can use various conditional statements such as if, else if, else, and switch.    

conditional statments also called decision making statements
*/

// if statement
let num: number = 10;
if (num > 0) {
    console.log(num, "is a positive number.");
}

// if-else statement
if (num % 2 === 0) {
    console.log(num, "is an even number.");
} else {
    console.log(num, "is an odd number.");
}

// if-else if-else statement
if (num > 0) {
    console.log(num, "is a positive number.");
} else if (num < 0) {
    console.log(num, "is a negative number.");
} else {
    console.log(num, "is zero.");
}


//switch statment expression explain different cases based on the value of an expression  
let day: number = 3;
let dayName: string;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";

        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
        break;
}
    console.log(`Day ${day} is ${dayName}`);

    


