'use strict';
const friends = ["Ujwal", "Nishkarh", "Vikul", "Himansu"];

//Add Element 
const newlength = friends.push('Jay');
console.log(friends);
console.log(newlength);

friends.unshift('John'); // Add element in first
console.log(friends);

//Remove Element

friends.pop();
const popped = friends.pop;
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

//position of array

console.log(friends.indexOf('Nishkarh'));
console.log(friends.indexOf('john'));

friends.push(25);
console.log(friends.includes('Nishkarh'));
console.log(friends.includes('parth'));
console.log(friends.includes(23));

if (friends.includes('Harish')) {
    console.log("You have a friends called Harish");
}
