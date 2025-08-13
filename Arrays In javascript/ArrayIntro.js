//<<<<<<<<<<<<<<-------------- Arrays ---------------->>>>>>>>>>>>>>>>>>>

const f1 = "Parth";
const f2 = "Satyam";
const f3 = "Nitish";
const f4 = "Harish";

//friends = ["xyz", "abc"]; //can't do this!
const friends = ["Ujwal", "Nishkarh", "Vikul", "Himansu"];
console.log(friends);

const year = new Array(1998, 2000, 2004, 2008);
console.log(year);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[3] = "Nikhil";
console.log(friends);

const firstName = "Sushant";
const Sushant = [firstName, "Negi", 2022 - 1998, "Programer", friends];
console.log(Sushant);
console.log(Sushant.length);

/*-----------------------Implementation of the Map mathod-------------- */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsed = 1.1;
const movementsUSD = movements.map(function (move) {
  return move * eurToUsed;
});

const movementsUSDArrow = movements.map((move) => {
  return move * eurToUsed;
});

console.log(movementsUSDArrow);
console.log(movements);
console.log(movementsUSD);

const movementsDescription = movements.map((move, i, arr) => {
  if (move > 0) {
    return `Movement ${i + 1}: You deposited ${move}!`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(move)}!`;
  }
});

console.log(movementsDescription);

/*------------------filter implementation--------------------- */
const deposit = movements.filter(function (move) {
  return move > 0;
});

const withdrawals = movements.filter(function (move) {
  return move < 0;
});
const withdrawals1 = movements.filter((move) => move < 0);

console.log(movements);
console.log(deposit);
console.log(withdrawals);
console.log(withdrawals1);

/**---------------------------reduce implementations------------- */
//accumulator -> snowball
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);
console.log(balance);

//Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(max);

//Chainnig of the map, reduce and filter or PIPELINE
const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  //   .map((mov) => mov * eurToUsd)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
