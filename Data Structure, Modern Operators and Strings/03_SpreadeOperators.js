// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 5);

const newMenu = [...restaurant.mainMenu, "ABC"];
console.log(newMenu);

//ShallowCopy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 array together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables are array, strings, maps, sets, but not objects
const str = "Negi";
const letters = [...str, " ", "S."];
console.log(letters); //['N', 'e', 'g', 'i', ' ', 'S.']
console.log(...str); //N e g i
//console.log(`${...str} Negi`);

//Real-world example
const ingredients = [
  prompt("Let's make pasta Ingredients 1?"),
  prompt("Ingredients 2?"),
  prompt("Ingredients 3?"),
];

console.log(ingredients); //["a", "b", "c"]

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // (a, b, c)

restaurant.orderPasta(...ingredients); // (a, b, c)

//also work on objects even though objects are not itrables
const newResturants = { foundediIn: 1999, ...restaurant, founder: "PQRSTU" };
console.log(newResturants);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "ABCDE";
console.log(restaurant.name);
console.log(restaurant.name);
