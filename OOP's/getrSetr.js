"use strict";

const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;

console.log(account.movements);

class PersonCl {
  constructor(fullName, bYear) {
    this.fullName = fullName;
    this.bYear = bYear;
  }

  greet() {
    console.log(`Hey ${this.fName}`);
  }

  get age() {
    return 2027 - this.bYear;
  }

  //set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl("Jassica Davis", 1995);
console.log(jessica);

const walter = new PersonCl("Walter White", 1965);
console.log(walter);
jessica.calcAge();
