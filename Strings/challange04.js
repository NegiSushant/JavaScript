/*

Challenge 04: Working with Strings
The input will come from a textarea inserted into the DOM(see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (passed to textarea)
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
uderscoreCase
firstName
someVariable
calculateAge
delayedDeparture

HINT 1: Remember which character definrs a new line in the textarea.
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b.
HINT 3: Start witout worrying about the. Tackle that only after you have the variable name conversion working.
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck.
*/
const toCamelCaseConv = function (inputString) {
  const [firstWord, secondWord] = inputString.toLowerCase().split("_");
  return firstWord + secondWord[0].toUpperCase() + secondWord.slice(1);
};

console.log(toCamelCaseConv("underscore_case"));
console.log(toCamelCaseConv('first_name'));
console.log(toCamelCaseConv('Some_Variable'));
console.log(toCamelCaseConv('calculate_AGE'));
console.log(toCamelCaseConv('delayed_departure'));