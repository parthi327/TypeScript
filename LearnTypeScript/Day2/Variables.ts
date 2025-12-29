/* 
var - is function-scoped and can be redeclared and updated.
let - is block-scoped and can be updated but not redeclared within the same scope.
const - is block-scoped and cannot be updated or redeclared; it must be initialized at the time of declaration.
*/

/* function variableScopeDemo() {
    // Using var
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
    }

    console.log(x);
    // console.log(y); // This would cause an error because y is block-scoped
    // console.log(z); // This would cause an error because z is not defined yet
}
variableScopeDemo(); // Outputs: 10

function variableDeclarationDemo() {
    // Using var
    var x;
    console.log("Initial var x:", x); // 10
    x = 20; // Updating var
    console.log("Updated var x:", x); // 20
    let y;// Redeclaring var
    console.log("intial var y:", y); // 30
    y = 30;
    console.log("Updated var y again:", y); // 30
    const z = 40; // Initializing const
    console.log("const z:", z); // 40
    // z = 50; // This would cause an error because const cannot be updated
}
variableDeclarationDemo();

function variableReDeclarationDemo() {
    // Using var
    var x = 10;
    var x = 100;
    console.log(" var x:", x); // 10

    let y = 20;
    let y = 200;// Redeclaring var
    console.log("let y:", y); // 30

    const z = 40;
    const z = 400 // Initializing const
    console.log("const z:", z); // 40
    // z = 50; // This would cause an error because const cannot be updated
}
variableReDeclarationDemo();

function variableReInitializationDemo() {
    var x = 10;
    x = 100;
    console.log(" var x:", x); // 100
    let y = 20;
    y = 200;
    console.log("let y:", y); // 200

    const z = 30;
    z = 300
    console.log("const z:", z); // This would cause an error because const cannot be updated
}

variableReInitializationDemo();
 */
function variableHostingDemo() {
    console.log("var x before declaration:", x);
    var x = 10;
    console.log("var x after declaration:", x);
    // console.log("let y before declaration:", y); // This would cause an error
    let y = 20;
    console.log("let y after declaration:", y);
    // console.log("const z before declaration:", z); // This would cause an error
    const z = 30;
    console.log("const z after declaration:", z);
}
variableHostingDemo();

/*
Summary:
- var is function-scoped, can be redeclared and updated, and is hoisted (initialized as undefined).
- let and const are block-scoped, cannot be redeclared in the same scope, and are not initialized until their declaration is evaluated (temporal dead zone).
- let can be updated, const cannot.
- Hoisting demo shows var is accessible before declaration (undefined), let/const are not.
*/