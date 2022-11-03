'use strict';
// Arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

//Oneline of Parameter
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 60 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1998));

// when we have multiple parameter
const YearUntilRetirement = (BirthYr, FirstName) => {
    const age1 = 2050 - BirthYr;
    const retirements = 60 - age1;

    return `${FirstName} retires in ${retirements} years`;
}

console.log(YearUntilRetirement(1998, 'Sushant'));
console.log(YearUntilRetirement(2000, 'Bob'));
