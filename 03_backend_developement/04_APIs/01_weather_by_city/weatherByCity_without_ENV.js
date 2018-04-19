const webRequest = require("request");

function weatherByCity(cityname){
  webRequest(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=6d94308247d6e031436bad2d92fa3a3c`,
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
