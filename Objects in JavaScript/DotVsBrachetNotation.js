'use strict';

const Sushant = {
    firstName: 'Sushant',
    lastName: 'Negi',
    age: 2022 - 1998,
    job: 'Programmer',
    friends: ['Sanjay', 'Sachin', 'Vinay']
};
console.log(Sushant);

console.log(Sushant.lastName);
console.log(Sushant['lastName']);

const nameKey = 'Name';
console.log(Sushant['first' + nameKey]);
console.log(Sushant['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (Sushant[interestedIn]) {
    console.log(Sushant[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

Sushant.location = 'India';
Sushant['Linkedin'] = '@name.in';
console.log(Sushant);
