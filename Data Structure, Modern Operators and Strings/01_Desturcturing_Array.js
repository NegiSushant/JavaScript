"use strict";
// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Destructuring/unpacking assignment
const [x, y, z] = arr;
console.log(x, y, z);
// orignal array doesn't affect
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary); //Italian Pizzeria
let [main1, , secondary1] = restaurant.categories;
console.log(main1, secondary1); //Italian Vegetarian

// swaping value of array
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); //Pizzeria Italian

//swaping value by using the destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructure
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // 2 (2) [5, 6]

const [a1, , [b1, c1]] = nested;
console.log(a1, b1, c1); // 2 5 6

//Default Value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
