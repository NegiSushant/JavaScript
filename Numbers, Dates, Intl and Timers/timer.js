"use strict";

setTimeout(() => console.log("Here is your pizza"), 3000);
console.log("waiting............");

setTimeout(
  (Ing1, Ing2) => console.log(`Here is your pizza with ${Ing1} and ${Ing2}`),
  3000,
  "Onion",
  "Paneer"
);
console.log("waiting...........");

const ingredients = ["Onion", "Paneer"];
const pizzaTimer = setTimeout(
  (Ing1, Ing2) => console.log(`Here is your pizza with ${Ing1} and ${Ing2}`),
  3000,
  ...ingredients
);

if (!ingredients.includes("spinich")) clearTimeout(pizzaTimer);

//setTimeout
setTimeout(function () {
  const now = new Date();
  console.log(now);
}, 3000);
