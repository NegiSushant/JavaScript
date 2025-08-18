'use strict';

const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve('You Win!'); //this is the result of this promise.
  } else {
    reject('You lost your money!');
  }
});

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// async promise
const lotteryPromise2 = new Promise(function (resolve, reject) {
  console.log('LOttery drow is happenning!');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win!'); //this is the result of this promise.
    } else {
      reject(new Error('You lost your money!'));
    }
  }, 2000);
});

lotteryPromise2.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 secon passed!');
    return wait(1);
  })
  .then(() => {
    console.log('2 secon passed!');
    return wait(1);
  })
  .then(() => {
    console.log('3 secon passed!');
    return wait(1);
  })
  .then(() => console.log('4 second passed!'));

Promise.resolve('resolve immedeatly').then(x => console.log(x));
Promise.reject(new Error('Some error accourd')).catch(x => console.error(x));

// Promisifying the Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryCode}`);

      return fetch(`https://restcountries.com/v2/name/${data.countryCode}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};
