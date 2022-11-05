'use strict';

const negi = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

// console.log(negi[0])
// console.log(negi[1])
// ...
// console.log(negi[4])
// negi[5] does NOT exist

for (let i = 0; i < negi.length; i++) {
    // Reading from negi array
    console.log(negi[i], typeof negi[i]);

    // Filling types array
    types[i] = typeof negi[i];
    types.push(typeof negi[i]);
}

console.log(types);

const years = [1998, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);
