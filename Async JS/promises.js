'use strict';

const renderCountry = function (countryData, className = '') {
  const html = `
                <article class="country" ${className}>
                    <img class="country__img" src="${countryData.flags.svg}" />
                    <div class="country__data">
                        <h3 class="country__name">${countryData.name.common}</h3>
                        <h4 class="country__region">${countryData.region}</h4>
                        <p class="country__row"><span>👫</span>${countryData.population}</p>
                        <p class="country__row"><span>🗣️</span>${language}</p>
                        <p class="country__row"><span>💰</span>${currency}</p>
                    </div>
                </article>
            `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const request = fetch('https://restcountries.com/v3.1/name/usa');
console.log(request); //Promise {[[PromiseState]]: 'pending', [[PromiseResult]]: undefined, Symbol(async_id_symbol): 33, Symbol(trigger_async_id_symbol): 10}

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response); //_Response {Symbol(state): Proxy(Object), Symbol(headers): _Headers}
      return response.json(); //json is async function
    })
    .then(function (data) {
      console.log(...data); //{name: {…}, tld: Array(1), cca2: 'US', ccn3: '840', cioc: 'USA', …}
      //   renderCountry.data[0];
    });
};

getCountryData('usa');

const myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulating success or failure

  if (success) {
    resolve('Operation completed successfully!'); // Transition to fulfilled
  } else {
    reject('Operation failed!'); // Transition to rejected
  }
});

// Consuming the promise
myPromise
  .then(result => {
    console.log(result); // Handle success (fulfilled state)
  })
  .catch(error => {
    console.log(error); // Handle error (rejected state)
  });

// Promise chaining
const getCountryDataArrow = function (country) {
  //COuntry 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      //COuntry 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
      //   return 23;
    })
    // .then(data => alert(data));
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

getCountryDataArrow('USA');

//Handling rejected promises

const renderError = function (msg) {
  //   countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
  console.error(`${msg} 💥💥💥`);
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryDataHandleError = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      console.log('Something went wrong from finally block!');
      //   countriesContainer.style.opacity = 1;
    });
};
getCountryDataHandleError('Usa');
