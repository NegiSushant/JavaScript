"use strict";

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);

console.log(new Set("Jonas"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const stafUnique = new Set(staff);
console.log(stafUnique);

const stafUnique1 = [...new Set(staff)];
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

// console.log(new )
const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFood = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);
// comman item from both set
const commanFoods = italianFoods.intersection(mexicanFood);
console.log(`Intersection: `, commanFoods); //Intersection:  Set(2) {size: 2, tomatoes, garlic}
console.log([...commanFoods]); //Set(10) {size: 10, pasta, gnocchi, tomatoes, olive oil, garlic, …}

//union
const unionOfSet = italianFoods.union(mexicanFood);
console.log(unionOfSet); // Set(10) {size: 10, pasta, gnocchi, tomatoes, olive oil, garlic, …}
console.log([...unionOfSet]); //(10) ['pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', 'basil', 'tortillas', 'beans', 'rice', 'avocado']
console.log(new Set([...italianFoods, ...mexicanFood])); //Set(10) {size: 10, pasta, gnocchi, tomatoes, olive oil, garlic, …}

//difference
const differenceOfSet = italianFoods.difference(mexicanFood);
console.log(differenceOfSet); //Set(4) {size: 4, pasta, gnocchi, olive oil, basil}

//symmetric difference
const symmetricDifferenceOfSet = italianFoods.symmetricDifference(mexicanFood);
console.log(symmetricDifferenceOfSet); //Set(8) {size: 8, pasta, gnocchi, olive oil, basil, tortillas, …}
