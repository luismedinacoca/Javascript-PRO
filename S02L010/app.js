/*
BacnkAccount class
- Properties:
  -  balance (defaults to 0 if not provided)
  -  accountHolder
  -  accountNumber
- Methods:
  -  deposit(amt) - increases balance by amt
  -  withdraw(amt) - decreases balance by amt.
*/


class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amt){
        if(amt > 0) {
            this.balance += amt;
            console.log(`You deposited $${amt}. New balance is: $${amt}`);
        } else {
            console.log("Can't deposit a negative ampunt");
        }
    }

    withdraw(amt){
        if(amt > this.balance){
            console.log("You can't withdraw that much!");
        } else {
            this.balance -= amt;
            console.log(`You withdrew $${amt}. New balance is $${this.balance}`);
        }
    }
}