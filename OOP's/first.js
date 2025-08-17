"use strict";

//constructor function
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this means neaver creath mathod inside constructor function
  //   this.calcAge = function () {
  //     console.log(2025 - this.birthYear);
  //   };
};

const person1 = new Person("Sushant", 1998);
console.log(person1);

//1. New {} is created
//2. function is called, this={}
//3. {} linked to prototype
//4. function automatically return {}

const matilda = new Person("Matilda", 2000);
console.log(matilda);
console.log(person1 instanceof Person);


//Static methods