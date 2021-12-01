let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city.");

if (city.length > 0) {
  let cityEdit = city.toLowerCase().trim();
  if (
    cityEdit === "paris" ||
    cityEdit === "tokyo" ||
    cityEdit === "lisbon" ||
    cityEdit === "san francisco" ||
    cityEdit === "moscow"
  ) {
    weather[cityEdit].temp = Math.round(weather[cityEdit].temp);
    alert(
      `It is currently ${weather[cityEdit].temp}°C in ${city}, with a humidity of ${weather[cityEdit].humidity}%.`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for ${city}. Try going to https://www.google.com/search?q=weather+${city.replaceAll(
        " ",
        ""
      )}.`
    );
  }
} else {
  alert("Please enter a city.");
}
