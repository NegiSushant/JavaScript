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

