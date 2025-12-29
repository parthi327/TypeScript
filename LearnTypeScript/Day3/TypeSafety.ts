/*
TypeScript is a statically typed superset of JavaScript that adds type safety to the language.
This means that TypeScript checks types at compile time, helping to catch errors before the code is run.
Here are some key concepts related to type safety in TypeScript:

*/
// Explicit type annotations
let message: string = "Hello, TypeScript!";
console.log(message);

//type inference
let age = 25;
console.log("Age:", age);

message=5;
age="twenty five";

console.log("Updated Message:", message);
// This would cause an error because const cannot be updated
console.log("Updated Age:", age);       


/*
If you want TypeScript to behave like a "strict" language and refuse to run if there are errors, you need to change a setting in your tsconfig.json file.

Open your tsconfig.json file in the root of your project.

Inside the "compilerOptions", add or update this line:

JSON

{
  "compilerOptions": {
    "noEmitOnError": true
  }
}

The reason your code still runs when using the tsx command is simple: tsx is designed to ignore type errors.Unlike the standard TypeScript compiler (tsc), which is a "checker and builder," tsx is a "runner." It prioritizes speed by transpiling your code (stripping away the types) and executing it immediately, skipping the type-checking phase entirely.Why noEmitOnError isn't working for youThe noEmitOnError setting is a rule for the tsc compiler. It tells tsc: "If you find a type error, don't create a .js file."However, tsx uses a different engine (called esbuild) that:Ignores your tsconfig.json for most type-checking rules.Does not perform type-checking during execution.Does not "emit" files to your disk; it runs them in memory.Because tsx never asks the question "Is this type-safe?", it never sees the error that would trigger noEmitOnError.How to make your workflow "Strict"If you want to ensure your code doesn't run unless the types are perfect, you need a two-step process. You cannot rely on tsx alone to find errors.Option A: The "Check then Run" ScriptThe best way to handle this is to update your package.json to include a script that checks types before running.JSON{
  "scripts": {
    "start": "tsc --noEmit && tsx yourfile.ts"
  }
}
tsc --noEmit: This runs the full TypeScript compiler. It checks your types but doesn't create any files. If it finds an error, the command stops immediately and won't reach the next part.tsx yourfile.ts: This only runs if the first command succeeds.Option B: Use ts-node (The Slower, Stricter Alternative)If you prefer a single command that respects your tsconfig.json, you can use ts-node instead of tsx.Bashnpx ts-node yourfile.ts
Note: ts-node is significantly slower than tsx because it performs type-checking every time you run the file. This is why many developers prefer the "Option A" approach for faster development.Summary ComparisonToolSpeedRespects noEmitOnError?Performs Type Checking?tscSlowYesYestsxInstantNoNo (Transpile only)ts-nodeMediumYesYes (unless --transpile-only is used)
  */