'use strict';

const sushant = {
    firstName: 'Sushant',
    lastName: 'Negi',
    birthYeah: 1998,
    job: 'Programmer',
    friends: ['Vinay', 'Santosh', 'Ritik'],
    hasDriversLicense: false,

    // calcAge: function (birthYeah) {
    //   return 2022 - birthYeah;
    // }

    // calcAge: function () {
    //   // console.log(this);
    //   return 2022 - this.birthYeah;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYeah;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${sushant.job}, and he have ${this.hasDriversLicense ? 'a' : 'not a'} drivering license.`
    }
};

console.log(sushant.calcAge());

console.log(sushant.age);
console.log(sushant.age);
console.log(sushant.age);

// Challenge
// "Name is a year old teacher, and he have a/not a drivering license"
console.log(sushant.getSummary());
