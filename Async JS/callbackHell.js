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

const getCOuntryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    if (data.length > 0) {
      const countryData = data[0];
      const language = Object.values(countryData.languages)[0]?.name;
      console.log(language);
      const currency = Object.values(countryData.currencies)[0]?.name;
      console.log(currency);

      // Render country
      renderCountry(data);

      //Get neighbour country (2)
      const neighbour = data.borders;
      if (!neighbour) return;

      // AJAX call country 2
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
      request2.send();

      request2.addEventListener('load', function () {
        const data2 = JSON.parse(this.responseText);
        console.log(data2);

        renderCountry(data2, 'neighbour');
      });
    }
  });
};

// Fetch data for a specific country
fetchCountryData('USA');
// fetchCountryData('portugal');
// fetchCountryData('china');

//Callbackhell
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
