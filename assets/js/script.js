//fetch variables
const APIKey = "11cdcbf49af33fdaab1058317ea232a0";
const units = 'imperial';
const cityInput = document.getElementById('citySearch');
const fetchButton = document.getElementById('fetch-button');

const savedCityEl = $('#saved-city');
const searchBarEl = $('#search-bar');
const forecastContainerEl = $('.current-forecast');

// To DO: Find a way to append the array within JSON
function saveLastCity() {
    const recentCity = cityInput.value;
    localStorage.setItem('City', JSON.stringify(recentCity).trim());
}

function renderRecentCities() {
    const searchedCity = $('input[name="city"]').val();

    savedCityEl.append(`<li>${searchedCity}</li>`);
    $('input[name="city"]').val(' ');
}

function getApi() {

    const city = JSON.parse(localStorage.getItem("City"));
    const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=${units}`;
      
          fetch(queryURL)
            .then((result) => result.json())
            .then((json) => {
              console.log(json);
              renderCurrentForecast();
            });
   /*  fetch(queryURL)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    renderCurrentForecast(data, main);
                });
            } else {
                alert(`Error:${response.statusText}`);
            }
        })
        .catch(function(error) {
            alert('Unable to connect to OpenWeather');
        }); */
        /* .then(function (data) {
            let forecastContainer = document.querySelector('.current-forecast');

            const currentForecast = document.createElement('h2');
            currentForecast.textContent =data.name;
            if (!currentForecast) {
                currentForecast="";
            }
            return currentForecast;
            forecastContainer.append(currentForecast);
        }); */
        /* .catch(console.err); */
};

function renderCurrentForecast(json) {
    forecastContainerEl.innerHTML = json.main;
}

/* const renderCurrentForecast = function () {

};
 */


fetchButton.addEventListener('click', function(event) {
    event.preventDefault();
    saveLastCity();
    renderRecentCities();
    getApi();
});

function init() {
    renderRecentCities();
}
init();

/* function kcWeather() {
fetch('https://api.openweathermap.org/data/2.5/weather?q=Kansas City&appid=11cdcbf49af33fdaab1058317ea232a0&units=imperial')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
}

kcWeather(); */

/* function renderLastCity() {
    const recentCity = JSON.parse(localStorage.getItem('city'));

    if (recentCity !== null) {
        document.getElementById('saved-city').innerHTML = recentCity;
      }
} */