"user strict";

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers!`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// This will show the closure with the passengerCount variable
/* console.dir(booker); ƒ () {
    passengerCount++;
    console.log(`${passengerCount} passengers!`);
  }
*/
let f;

const g = function () {
  const a = 25;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();

//Re-assigning f function
h();
f();
/*
console.dir(f);
ƒ(){
    console.log(b * 2);
}
*/

