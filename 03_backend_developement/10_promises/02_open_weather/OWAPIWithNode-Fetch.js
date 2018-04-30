const fetch = require("node-fetch");

function weatherByCityName(cityName){
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.OWMAPIKEY}`)
    .then((response) => response.json())
    .then((result) => console.log(`Temperature of ${result.name}: ${result.main.temp}°C`));
}

weatherByCityName("Milan");


function weatherByLatitudeAndLongitude(latitude, longitude){
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.OWMAPIKEY}`)
    .then((response) => response.json())
    .then((result) => console.log(`Temperature of ${result.name}: ${result.main.temp}°C`));
}

weatherByLatitudeAndLongitude("32.661343", "51.680374");
