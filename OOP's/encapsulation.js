"use strict";

//Encapsulation: Private class fields and methods

//1) public fields
//2). private fields
//3). public methods
//4). private methods

class Account {
  //public field
  locale = navigator.language;
  bank = "Bankist";
  //private field
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public interface(API)
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  //private method
  #approveLoan(val) {
    //Fake method
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved!`);
    }
    return this;
  }

  static test() {
    console.log(`Test`);
  }
}

const acc1 = new Account("Jonas", "INR", 1111);
acc1.deposit(300);
acc1.withdraw(100);
console.log(acc1);
Account.test();
// console.log(acc1.#movements);

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
