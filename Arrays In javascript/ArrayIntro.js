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
const Sushant = [firstName, 'Negi', 2022 - 1998, 'Programer', friends];
console.log(Sushant);
console.log(Sushant.length);
