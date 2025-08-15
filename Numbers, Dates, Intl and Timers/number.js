console.log(23 === 23.0); //true
// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

console.log(Number("23"));
console.log(+"23");

//Parsing
console.log(Number.parseInt("36px")); //36
console.log(Number.parseInt("e23")); //NaN

console.log(Number.parseInt("2.5rem")); //2
console.log(Number.parseFloat("2.5rem")); //2.5

//checking if value is not a number
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN("20")); //false
console.log(Number.isNaN(+"20X")); //true
console.log(Number.isNaN(23 / 0)); // false

//checking if value is number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite("23")); //false
console.log(Number.isFinite(+"20X")); //false
console.log(Number.isFinite(23 / 0)); //false

// Math and Rounding

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.max(5, 18, "23px", 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

// Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor("23.9"));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

// The Remainder Operator
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

// labelBalance.addEventListener("click", function () {
//   [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
//     // 0, 2, 4, 6
//     if (i % 2 === 0) row.style.backgroundColor = "orangered";
//     // 0, 3, 6, 9
//     if (i % 3 === 0) row.style.backgroundColor = "blue";
//   });
// });

///////////////////////////////////////
// Numeric Separators

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number("230_000"));
console.log(parseInt("230_000"));

///////////////////////////////////////
// Working with BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(4838430248342043823408394839483204n); // n transform the number into bigInt number
console.log(BigInt(48384302));

// Operations
console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n));

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == "20");

console.log(huge + " is REALLY big!!!");

// Divisions
console.log(11n / 3n);
console.log(10 / 3);

// Internationalizing Numbers (Intl)
const num1 = 3884764.23;

const options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
  // useGrouping: false,
};

console.log("US:      ", new Intl.NumberFormat("en-US", options).format(num1));
console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num1));
console.log("Syria:   ", new Intl.NumberFormat("ar-SY", options).format(num1));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num1)
);
