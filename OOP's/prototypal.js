"use strict";

//Prototypes
const Person = function (fName, bYear) {
  this.fName = fName;
  this.bYear = bYear;
};

const Sushant = new Person("Sushant", 1998);
const matilda = new Person("Matilda", 2000);
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2025 - this.bYear);
};

Sushant.calcAge();
matilda.calcAge();

console.log(Sushant.__proto__);
console.log(Sushant.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Sushant));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

//.prototypeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(Sushant.species, matilda.species);

console.log(Sushant.hasOwnProperty("fName"));
console.log(Sushant.hasOwnProperty("species"));

console.log(Sushant.__proto__);

//Object.prototype (top of prototype chain)
console.log(Sushant.__proto__.__proto__);
console.log(Sushant.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
