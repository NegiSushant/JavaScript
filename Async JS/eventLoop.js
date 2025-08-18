'use strict';

console.log('Test start');

setTimeout(() => console.log('0 sec timer'), 0);

Promise.resolve('Resolve Promise 1').then(res => console.log(res));

console.log('Test one!');
/* Output of the above: 
Test start
Test one!
Resolve Promise 1
0 sec timer
*/

Promise.resolve('Resolve promise 2!').then(res => {
  for (let i = 0; i < 100; i++) {
    console.log(res);
  }
  console.log(res);
});
