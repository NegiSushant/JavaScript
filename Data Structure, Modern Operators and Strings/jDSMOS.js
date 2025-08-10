const rest1 = {
  name: "Capri",
  //   numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Pizza",
  owner: "Some One",
};

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// console.log(rest1); //{name: 'Capri', numGuests: 20}
// console.log(rest2); // {name: 'La Pizza', owner: 'Some One', numGuests: 10}

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1); //{name: 'Capri', numGuests: 20}
// console.log(rest2); // {name: 'La Pizza', owner: 'Some One', numGuests: 10}

//nullish assignment operator (null or undefind)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1); //{name: 'Capri', numGuests: 0}
console.log(rest2); //{name: 'La Pizza', owner: 'Some One', numGuests: 10}

rest2.owner = rest2.owner && "<ANONYMOUS>";
rest2.owner = rest2.owner && "<ANONYMOUS>";

console.log(rest1); //{name: 'Capri', numGuests: 0}
console.log(rest2); // {name: 'La Pizza', owner: '<ANONYMOUS>', numGuests: 10}

/*-----------looping over array with for-of loop---------- */

// item= current element
// for (const item of menu) console.log(item);

// // get the index of array
// for (const item of menu.entrie()) {
//   console.log(item);
// }

// console.log(...menu.entrie());

/*----------------------Enhanced Object litrals--------- */

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //   openingHours: openingHours,

  // ES6 enhanced object literals
  openingHours,

  //   order: function (starterIndex, mainIndex) {
  //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //   },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

/*-----------------optional chaining---------- */

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  console.log(day);
  const opend = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}, we open at ${opend}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(1, 0) ?? "Method does not exist!");

//Arrays
const users = [{ name: "sushant", email: "something@email.com" }];

console.log(users[0]?.name ?? "User array empty.");

if (users.length > 0) console.log(users[0].name);
else console.log("User array empty.");

/*-------------Looping over objects---------------- */

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days!`;

for (const day of properties) {
  openStr += `${day}`;
}

console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const x of entries) {
  console.log(x);
}
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
