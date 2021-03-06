require('dotenv').load();
const webRequest = require("request");

function weatherByCity(cityname){
  webRequest(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${process.env.OWMAPIKEY}`,
      method: "GET"
    },
    function (error, response, result) {
      // const temperature = JSON.parse(result).main.temp;
      // console.log(`${temperature}°C`);
      console.log(`${JSON.parse(result).main.temp}°C`);
    }
  );
}
module.exports = weatherByCity;
