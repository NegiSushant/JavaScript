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

// Inheritance Between "Classes": Constructor Functions

const Person3 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person3.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person3.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person3.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person3);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
