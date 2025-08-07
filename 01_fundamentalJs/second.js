"use strict";

let hasDriversLicense = false;
const passTest = true;

// if (passTest) {
//   hasDriverLicense = true;
// }

// const interface = "AUdio";
// const private = 123;
// const if = true;

/*--------------------------functions------------------------- */
function functionName() {
  console.log("My name is Sushant Singh Negi!");
}

//calling, running, invoking the function
functionName();
functionName();
functionName();

function fruitProcessor(banana, apple) {
  console.log(banana, apple);
  const juice = `Juice with ${apple} apples and shake ${banana} banana.`;

  return juice;
}

const re = fruitProcessor(4, 5);
console.log(re);
console.log(fruitProcessor(4, 5));

//Function declaration
function calcAge1(birthYear) {
  const age = 2025 - birthYear;
  // return 2025 - birthYear;;
  return age;
}
const age1 = calcAge1(1998);
console.log(age1);
console.log(calcAge1(1998));

//function expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

const age2 = calcAge2(1998);
console.log(age2);

/*-------------Arrow function---------------- */
const calcAge3 = (birthYear2) => 2025 - birthYear2;
console.log(calcAge3(1998));

const retirementAge = (birthYears, name) => {
  const age = 2025 - birthYears;
  const retirement = 60;
  return `${name} retires in ${retirement - age} years!`;
};
console.log(retirementAge(1998, "John"));
