"use strict";

//class expression
// const PersonCl = class()

// class declaration
class PersonCl {
  constructor(fName, bYear) {
    this.fName = fName;
    this.bYear = bYear;
  }

  //Mathods will be added to .prototype property
  calcAge() {
    console.log(2025 - this.bYear);
  }

  greet() {
    console.log(`Hey ${this.fName}`);
  }
}

const jessica = new PersonCl("Jassica", 1995);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);
jessica.greet();


//1. classes are not hoisted
//2. classes are first-class citizen
//3. classes are excuted in strict mode