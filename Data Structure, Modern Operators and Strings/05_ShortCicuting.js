///////////////////////////////////////
// Short Circuiting (&& and ||)

console.log("---- OR ----");
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || "Jonas"); //3
console.log("" || "Jonas"); // Jonas
console.log(true || 0); // true
console.log(undefined || null); //null

console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //0

const guests2 = restaurant.numGuests1 || 10;
console.log(guests2); //10

console.log("---- AND ----");
console.log(0 && "Jonas"); // 0
console.log(7 && "Jonas"); // Jonas

console.log("Hello" && 23 && null && "jonas"); //null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// OR (||): OR operands simply return the first truthy value in the case of short circuiting
// AND (&&): Evalute or return on the first falsy value or return the last truethy value if all the truethy value available.

/*-----------------Nulish Coalescing operator--------- */
//Nullish: null and undefined (NOT 0 or '')
// restaurant.numGuests = 12;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //10
