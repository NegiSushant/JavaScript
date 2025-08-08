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

/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

*/

const calcAverage = (a, b, c) => {
  const avg = (a + b + c) / 3;
  return avg;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

checkWinner(scoreDolphins, scoreKoalas);

/*-------------------------Arrays----------------------*/
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends24 = ["Michael", "Steven", "Peter"];
console.log(friends24);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends24[0]);
console.log(friends24[1]);
console.log(friends24[2]);

console.log(friends24.length);
console.log(friends24[friends24.length - 1]); //last element

friends24[2] = "Jay";
console.log(friends24);
// friends = ["John", "Doe"]; // This will throw an error because we cannot reassign a constant variable

const negi = ["Sushant", "Negi", 2026 - 1998, "SDE", friends24];
console.log(negi);
console.log(negi.length); //5

//Exercise
const calcAges = function (birthYearss) {
  return 2025 - birthYearss;
};

const year12 = [1991, 1984, 2008, 2020];
console.log(calcAges(year12)); //NaN

const age11 = calcAges(year12[0]);
const age22 = calcAges(year12[1]);
const age33 = calcAges(year12[year12.length - 1]);
console.log(age11, age22, age33);

const ages = [
  calcAges(year12[0]),
  calcAges(year12[1]),
  calcAges(year12[year12.length - 1]),
];
console.log(ages); // [34, 41, 17]

/*---------------------Basic Array Operations------------------ */
const friends25 = ["Michael", "Steven", "Peter"];
friends25.push("Jay"); // Add an element to the end of the array
console.log(friends25);
console.log(friends25.length);

friends25.unshift("John"); // Add an element to the beginning of the array
console.log(friends25);

//Remove elements
const poped = friends25.pop(); // Remove the last element
console.log(poped); // Jay
console.log(friends25);

const poped1 = friends25.shift(); // Remove the first element
console.log(poped1); // John
console.log(friends25);

console.log(friends25.indexOf("Steven")); // Get the index of an element
console.log(friends25.indexOf("Bob")); // -1 (not found)

friends25.push(23); // Add a number to the array
console.log(friends25.includes("Steven")); // true
console.log(friends25.includes("Bob")); // false
console.log(friends25.includes("23")); // false

/*

CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.

*/

const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15; // 15% tip
  } else {
    return bill * 0.2; // 20% tip
  }
};

const bill = [125, 555, 44];
const tips1 = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

const totals1 = [tips1[0] + bill[0], tips1[1] + bill[1], tips1[2] + bill[2]];
console.log(totals1);

/*-------------------------Objects----------------------*/

const sushant = {
  firstName: "Sushant",
  lastName: "Negi",
  age: 2025 - 1998,
  job: "SDE",
  friends: ["Sanjay", "Sachin", "Shivanshu"],
};
console.log(sushant);
console.log(sushant.firstName);
console.log(sushant["lastName"]);

const nameKey = "Name";
console.log(sushant["first" + nameKey]); // Sushant
console.log(sushant["last" + nameKey]); // Negi

// console.log(sushant."first" + nameKey)
// const interestedIn = prompt(
//   "What do you want to know about Sushant? Choose between firstName, lastName, age, job, and friends"
// );
// console.log(sushant.interestedIn); // This will return undefined if the key does not exist
// console.log(sushant[interestedIn]); // This will return the value of the key if it exists

// if (sushant[interestedIn]) {
//   console.log(sushant[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }
sushant.location = "India"; // Adding a new key-value pair
sushant["twitter"] = "@sushantnegi"; // Adding a new key-value pair
console.log(sushant);

// Challenge
// "Sushant has 3 friends, and his best friend is Sanjay."
console.log(
  `Sushant has ${sushant.friends.length}, and his best friend is ${sushant.friends[0]}.`
);

const Negi = {
  firstName: "Sushant",
  lastName: "Negi",
  birthYear: 1998,
  job: "SDE",
  friends: ["Sanjay", "Sachin", "Shivanshu"],
  hasDriversLicense: true,
  //   calcAge: function () {
  //     this.age = 2025 - this.birthYear;
  //     return this.age;
  //   },

  //   calcAge: function () {
  //     console.log(this); // this refers to the object itself
  //     return 2025 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge}-year-old ${
      this.job
    }, and he has a ${
      this.hasDriversLicense ? "driver's" : "no driver's"
    } license.`;
  },
};

console.log(Negi.calcAge()); // 27
console.log(Negi["calcAge"]()); // 27

console.log(Negi.age);

// console.log(Negi.calcAge(1998)); // 27
// console.log(Negi["calcAge"](1998)); // 27

// Challenge
// "Sushant is a 27-year-old SDE, and he has a driver's license."
// console.log(
//   `${Negi.firstName} is a ${Negi.calcAge()}-year-old ${
//     Negi.job
//   }, and he has a ${
//     Negi.hasDriversLicense ? "driver's" : "no driver's"
//   } license.`
// );

console.log(Negi.getSummary()); // "Sushant is a 27-year-old SDE, and he has a driver's license."

/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.


*/
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}

/*----------------------loops in Js-------------------- */
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

const sushantFriends = [
  "Sanjay",
  "Sachin",
  "Shivanshu",
  "Saurabh",
  "Siddharth",
];

const types = [];
for (let i = 0; i < sushantFriends.length; i++) {
  console.log(sushantFriends[i], typeof sushantFriends[i]);
  //   types[i] = typeof sushantFriends[i]; // Storing the type of each element in the types array
  types.push(typeof sushantFriends[i]); // Another way to add types to the array
}

console.log(types);

let i = 0;
while (i < 10) {
  console.log(`Lifting weights repetition ${i + 1} 🏋️‍♂️`);
  i++;
}
/*

CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.
*/

const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip1(bills[i]);
  totals[i] = bills[i] + tips[i];
}
console.log(bills, tips, totals);

const calcAverage12 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
const averageTip = calcAverage12(tips);
console.log(`Average Tip: ${averageTip}`); // Average of the tips
