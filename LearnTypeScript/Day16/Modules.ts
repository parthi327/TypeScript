// create modules in TypeScript 
export namespace Utils {
    // function to calculate factorial
    export function factorial(n: number): number {      
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    // function to calculate power
    export function power(base: number, exponent: number): number {
        return Math.pow(base, exponent);
    }   
    // constant for Pi
    export const PI: number = 3.141592653589793;
    // function to calculate area of circle
    export function areaOfCircle(radius: number): number {
        return PI * power(radius, 2);
    }
}
// Example usage (uncomment to test)
