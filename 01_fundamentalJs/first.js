let js = "something";
console.log(js);

console.log("sushant singh negi");
console.log(27);

let firstName = "Sushant";
console.log(firstName);

/*Multiline comments*/
//Data type in javascripts
// Number
// String
// Boolean

let isJavaScriptIsFun = true;
console.log(isJavaScriptIsFun);

console.log(typeof true);
console.log(typeof isJavaScriptIsFun);
console.log(typeof 23);
console.log(typeof "sushant");

// Dynamic typing
isJavaScriptIsFun = "Yes!";
console.log(typeof isJavaScriptIsFun); //string

let year;
console.log(year); //undefined
console.log(typeof year); //undefined
year = 2025;
console.log(typeof year); //number

console.log(typeof null); //object

/*----------ways of declearing the variables----------*/
let age = 30;
age = 31; //reassigning the value or mutate a variable

const birthYear = 1998;
//birthYear = 2000;//TypeError TypeError: Assignment to constant variable.

//const job. //mising initializer in const declaration

//old way of declearing the variables
// var is function scope and let is block scope
var job = "programmer";
job = "coder!";
console.log(job);

lastName = "Negi";
console.log(lastName);

/*-----------------------------Operators in JS------------------- */
//Mathematical = +, -, /, *;

const now = 2025;
const ageJohn = now - 1998;
const ageSara = now - 2018;
console.log(ageJohn, ageSara);

console.log(ageJohn * 2, ageJohn / 10, ageJohn * ageSara);

//assignment: +=, ++, --

//Comparison operators: >, <, >=, <=, ==, ===

/*--------------Coding Challange 1-------------- 
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �

*/
let markMass = 78;
let markHeight = 1.69;
const markBMI = markMass / markHeight ** 2;
let johnMass = 92;
let johnHeight = 1.95;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

const firstName1 = "Sushant";
const lastName1 = "Negi";
const bYear = 1998;

const year1 = 2025;

const sushant =
  "I'm " + firstName1 + ", a " + (year1 - bYear) + " year old " + job + "!";
console.log(sushant);

/* ------------template litral----------------*/
const sushantNew = `I'm ${firstName1}, a ${year1 - bYear} year old ${job}!!!!`;
console.log(sushantNew);
console.log(`Just a regular string............`);

console.log(
  "String with \n\
multiple \n\
lines."
);

console.log(`String
multiple
line!`);

/*--------------------conditional statements------------ */
const ages = 17;
const isOldEnough = ages >= 18;
console.log(isOldEnough);

if (isOldEnough) {
  console.log("You are eligible to drive car!😊");
} else {
  const yearLeft = 18 - ages;
  console.log(`You are too yong. Wait another ${yearLeft} years.`);
}

const birthYears = 1998;
let century;
if (birthYears <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

/*
CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are
 */

if (johnBMI > markBMI) {
  console.log(`John's BMI is higher than Mark's!`);
} else {
  console.log(`Mark's BMI is higher than John's!`);
}

/*---------------------Type Conversion & Coercion-------------- */
//type conversion: manually convert one data type to other
const inputYear = "1998";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Sushant"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion: automatically convert data type
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3); // 10
console.log("23" + "10" + 3); //23103

let n = "1" + 1;
n = n - 1;
console.log(n); //10

/*------------------- Truthy and Falsy ------------------------ */
//Falsy: Value does not convert into boolean Datatype
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Sushant"));
console.log(Boolean({}));
console.log(Boolean(""));

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log(`Sara is able to drive!`);
} else {
  console.log(`Someone else should drive...!`);
}
/*
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/