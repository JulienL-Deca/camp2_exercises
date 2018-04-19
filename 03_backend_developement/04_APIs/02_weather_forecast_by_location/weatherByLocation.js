const webRequest = require("request");

function weatherByLatitudeAndLongitude(latitude, longitude){
  webRequest(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=6d94308247d6e031436bad2d92fa3a3c`,
      method: "GET"
    },
    function (error, response, result) {
      // const temperature = JSON.parse(result).main.temp;
      // console.log(`${temperature}°C`);
      let myResult = JSON.parse(result);
      if ( myResult.message === "city not found") {
        return console.log(myResult.message);
      } else {
        return console.log(`${JSON.parse(result).main.temp}°C`);
      }
    }
  );
}


function weatherByZipcode(zip_code,country_code){
  webRequest(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?zip=${zip_code},${country_code}&units=metric&appid=6d94308247d6e031436bad2d92fa3a3c`,
      method: "GET"
    },
    function (error, response, result) {
      // const temperature = JSON.parse(result).main.temp;
      // console.log(`${temperature}°C`);
      let myResult = JSON.parse(result);
      if ( myResult.message === "city not found") {
        return console.log(myResult.message);
      } else {
        return console.log(`${JSON.parse(result).main.temp}°C`);
      }
    }
  );
}
module.exports = {
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude,
  weatherByZipcode: weatherByZipcode
}
