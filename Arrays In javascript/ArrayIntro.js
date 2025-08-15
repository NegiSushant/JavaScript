//<<<<<<<<<<<<<<-------------- Arrays ---------------->>>>>>>>>>>>>>>>>>>

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "premium",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "basic",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "standard",
};

const accounts = [account1, account2, account3, account4];

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

// FindLast and FindLastIndex
console.log(movements);

const lastWithdrawal = movements.findLast((mov) => mov < 0);

console.log(lastWithdrawal);

//"Your latest large movement was X movements ago";
const latestLargeMovementIndex = movements.findLastIndex(
  (mov) => Math.abs(mov) > 1000
);

console.log(latestLargeMovementIndex);

console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);

//EQUALITY
console.log(movements.includes(-130));

//SOME: CONDITION
console.log(movements.some((mov) => mov === -130));
const anydeposit = movements.some((mov) => mov > 0);

console.log(anydeposit);

// EVERY
console.log(movements.every((mov) => mov > 0));
// console.log(account4.movements.every((mov) => mov > 0));

//Separate callback
const deposit1 = (mov) => mov > 0;
console.log(movements.some(deposit1));
console.log(movements.every(deposit1));
console.log(movements.filter(deposit1));

//flat
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); //[1,2,3,4,5,6,7,8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); //[1,2,3,4,5,6,7,8]

// const accounts = ["account1", "account2", "account3", "account4"];

const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overalBalance1 = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance1);

const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//flatMap = only work for the 1 level nested array
const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

/*----------------sorting Arrays-------------------- */
//Strings
const owner = ["Johns", "Zach", "Adam", "Martina"];
console.log(owner.sort());
console.log(owner); //['Adam', 'Johns', 'Martina', 'Zach']

//Numbers
console.log(movements);
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]

//Assending order
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});

console.log(movements); //[-650, -400, -130, 70, 200, 450, 1300, 3000]

//Desending order
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});

console.log(movements); //[3000, 1300, 450, 200, 70, -130, -400, -650]

/*----------------------------ArrayGrouping--------------------- */
console.log(movements);

const groupedMovements = Object.groupBy(movements, (movement) =>
  movement > 0 ? "deposits" : "withdrawals"
);

console.log(groupedMovements);

const groupByActivity = Object.groupBy(accounts, (account) => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) return "very active";
  if (movementCount >= 4) return "active";
  if (movementCount >= 1) return "moderate";
});

console.log(groupByActivity);

// const groupByAccounts = Object.groupBy(accounts, (account) => {
//   account.type;
// });
const groupByAccounts = Object.groupBy(accounts, ({ type }) => type);
console.log(groupByAccounts);

///////////////////////////////////////
// More Ways of Creating and Filling Arrays
const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr1.fill(23, 2, 6);
console.log(arr1);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// labelBalance.addEventListener("click", function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (el) => Number(el.textContent.replace("€", ""))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll(".movements__value")];
// });

///////////////////////////////////////
// Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with

console.log(movements);
const reversedMov = movements.toReversed();
console.log(reversedMov);

// toSorted (sort), toSpliced (splice)

// movements[1] = 2000;
const newMovements = movements.with(1, 2000);
console.log(newMovements);

console.log(movements);
