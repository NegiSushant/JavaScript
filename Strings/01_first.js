"use strict";

const airline = "Air India";
const plane = "Boeing 777";

console.log(plane[0]); // B
console.log(plane[1]); // o
console.log(plane[2]);
console.log("Boeing 777"[0]); // B

console.log(airline.length);
console.log("Boeing 777".length); // 10

//methods of strings
console.log(airline.indexOf("I"));
console.log(airline.lastIndexOf("i"));
console.log(airline.indexOf("Air"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat!");
  } else {
    console.log("You got lucky😎!");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Negi")); // String('Negi')
console.log(typeof new String("Negi")); // object

console.log(typeof new String("Negi").slice(1)); // string

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix capitalization in the name
const passenger = "SUshant";
const passangerLower = passenger.toLowerCase();
const passangerCorrect =
  passangerLower[0].toLowerCase() + passangerLower.slice(1);

console.log(passangerCorrect);

//Comparing emails
const email = "hello@emai.com";
const loginEmail = "     Hello@Email.Com \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS); // 288.97$

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate")); //All passengers come to boarding gate 23. Boarding door 23!
console.log(announcement.replaceAll("door", "gate")); //All passengers come to boarding gate 23. Boarding gate 23!

// regular expressions
console.log(announcement.replace(/gate/g, "door"));

//Booleans
const plane1 = "Airbus A320neo";
console.log(plane1.includes("A320")); // true
console.log(plane1.includes("Boeing")); // false
console.log(plane1.startsWith("Air"));

if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
  console.log("Part of the New Airline Fleet");
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board!");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

console.log("a+very+nice+string".split("+"));
console.log("Sushant Singh Negi".split(" "));

const [firstName, middleName, LastName] = "Sushant Singh Negi".split(" ");
console.log(firstName, middleName, LastName);

const newName = ["Mr.", firstName, LastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n.replace(n[0], n[0].toLowerCase()));
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("sushant singh negi");
capitalizeName("jessica ann smith davis");

//padding strings

const message = "Go to gate 23!";

console.log(message.padStart(25, "+")); //+++++++++++Go to gate 23!
console.log("Jonas".padStart(25, "+").padEnd(30, "+")); //++++++++++++++Jonas+++++++++++++++
console.log("Sushant".padStart(25, "+").padEnd(30, "+")); //++++++++++++++Sushant+++++++++++++++

const maskCreditCaed = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCaed(1234567890123456)); // ************3456
console.log(maskCreditCaed(1234567890123456789)); // **********6789

// Repeat method
const message2 = "Bad weather... All Departures Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n}, planes in line ${"✈️".repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
