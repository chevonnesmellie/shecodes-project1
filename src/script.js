function handleSubmit(event) {
  event.preventDefault();
  let apiKey = "35edd9e7e8e2b546aad3ee8914df1a70";
  let cityInput = document.querySelector("#city-input");
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(getSearchResults);
}

function getSearchResults(response) {
  console.log(response.data);
  document.querySelector("#searched-city").innerHTML = response.data.name;
  document.querySelector("#country").innerHTML = response.data.sys.country;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(
    "#humidity"
  ).innerHTML = `${response.data.main.humidity}%`;
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#wind").innerHTML = `${response.data.wind.speed}m/s`;
}

function getCelsiusTemp(event) {
  event.preventDefault();
  let celsiusTemp = document.querySelector(".temp");
  celsiusTemp.innerHTML = "⛅19";

  function showCelsius(day) {
    day.innerHTML = "19°C";
  }

  let celsiusForecast = document.querySelectorAll(".day-temp");
  celsiusForecast.forEach(showCelsius);
}

function getFarenheitTemp(event) {
  event.preventDefault();
  let farenheitTemp = document.querySelector(".temp");
  farenheitTemp.innerHTML = "⛅44";

  function showFarenheit(day) {
    day.innerHTML = "44°F";
  }

  let farenheitForecast = document.querySelectorAll(".day-temp");
  farenheitForecast.forEach(showFarenheit);
}

function formatDate() {
  let timeDisplay = document.querySelector("#time");
  let day = currentTime.getDay();
  let hour = currentTime.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  timeDisplay.innerHTML = `${days[day]} ${hour}:${minutes}`;

  //let dayOne = document.querySelector("#day-one");
  //dayOne.innerHTML = days[day + 1];
  //let dayTwo = document.querySelector("#day-two");
  //dayTwo.innerHTML = days[day + 2];
  //let dayThree = document.querySelector("#day-three");
  //dayThree.innerHTML = days[day + 3];
  //let dayFour = document.querySelector("#day-four");
  //dayFour.innerHTML = days[day + 4];
  //let dayFive = document.querySelector("#day-five");
  //dayFive.innerHTML = days[day + 5];
}

function getUserLocation(position) {
  function showCurrentLocationWeather(response) {
    console.log(response.data);
    let locationTemp = document.querySelector("#temp");
    locationTemp.innerHTML = Math.round(response.data.main.temp);
    let currentLocation = document.querySelector("#searched-city");
    currentLocation.innerHTML = response.data.name;
    let currentCountry = document.querySelector("#country");
    currentCountry.innerHTML = response.data.sys.country;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `${response.data.main.humidity}%`;
    let description = document.querySelector("#weather-description");
    description.innerHTML = response.data.weather[0].description;
    let wind = document.querySelector("#wind");
    wind.innerHTML = `${response.data.wind.speed}m/s`;
  }
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let unit = "metric";
  let apiKey = "35edd9e7e8e2b546aad3ee8914df1a70";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCurrentLocationWeather);
}

function getGeolocation() {
  navigator.geolocation.getCurrentPosition(getUserLocation);
}

function displayDefault() {
  let apiKey = "35edd9e7e8e2b546aad3ee8914df1a70";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getSearchResults);
}

let apiKey = "35edd9e7e8e2b546aad3ee8914df1a70";
displayDefault();

//navigator.geolocation.getCurrentPosition(getUserLocation);

let currentTime = new Date();
formatDate();

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", handleSubmit);

let celsius = document.querySelector(".celsius");
let farenheit = document.querySelector(".farenheit");

celsius.addEventListener("click", getCelsiusTemp);
farenheit.addEventListener("click", getFarenheitTemp);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getGeolocation);
