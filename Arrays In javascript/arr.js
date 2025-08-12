"use strict";

let arr = ["a", "b", "c", "d", "e"];

/*------------slice method------------- */
//Does not mutate the original array, returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // 'c', 'd'
console.log(arr.slice(-2)); // 'd', 'e'
console.log(arr.slice(-1)); //e
console.log(arr.slice(1, -2)); // 'b', 'c', 'd'

console.log(arr.slice()); // creates a shallow copy of the array
console.log([...arr]); // also creates a shallow copy of the array

/*----------Splice------------------ */
//Mutates the original array, changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. Returns the removed elements as a new array.
arr.splice(-1);
console.log(arr);

arr.splice(-1);
console.log(arr); // ['a', 'b', 'c', 'd']

arr.splice(1, 2); // removes 2 elements starting from index 1
console.log(arr); // ['a', 'd']

/*-------------Reverse ---------------- */
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', '

/*------------------------Concat ------------------- */
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

/*---------------Join----------------- */
console.log(letters.join(" - ")); // 'a - b - c - d - e - f - g - h - i - j'

const dummyArray = [23, 24, 25];
console.log(dummyArray.at(0)); //23 == dummyArray[0]

console.log(dummyArray.at(-1)); //25 == dummyArray[dummyArray.length -1]
console.log(dummyArray.slice(-1)[0]); //25

console.log("Sushant".at(0)); //'S'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements) {
  // for (const [counterVar, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log("----FOREACH----");
//continue and break statements do not work in forEach loop

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

//Map example
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, Map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});
