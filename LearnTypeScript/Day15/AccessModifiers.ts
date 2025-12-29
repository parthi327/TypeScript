// create parent class with different access modifiers in TypeScript
class BankAccount {
    // public property  
    public accountNumber: string;
    // private property
    private balance: number;
    // protected property
    protected accountHolderName: string;
    // constructor
    constructor(accountNumber: string, accountHolderName: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = initialBalance;
    }
    // public method to deposit money
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    // public method to get balance
    public getBalance(): number {
        return this.balance;
    }   
    // protected method to get account holder name
    protected getAccountHolderName(): string {
        return this.accountHolderName;
    }
}
// derived class SavingsAccount inheriting from BankAccount
class SavingsAccount extends BankAccount {
    // constructor  
    constructor(accountNumber: string, accountHolderName: string, initialBalance: number) {
        super(accountNumber, accountHolderName, initialBalance);
    }
    // method to display account holder name
 displayAccountHolderName(): void {
        console.log(`Account Holder Name: ${this.getAccountHolderName()}`);
    }
}
// create instances of the classes
let myAccount = new BankAccount("123456789", "John Doe", 1000);
myAccount.deposit(500);
console.log("Current Balance:", myAccount.getBalance());
let mySavingsAccount = new SavingsAccount("987654321", "Jane Smith", 2000);
mySavingsAccount.deposit(300);
console.log("Savings Account Balance:", mySavingsAccount.getBalance());
mySavingsAccount.displayAccountHolderName();
// Attempting to access private and protected members will result in errors
// console.log(myAccount.balance); // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
// console.log(myAccount.accountHolderName); // Error: Property 'accountHolderName' is protected and only accessible within class 'BankAccount' and its subclasses. 

