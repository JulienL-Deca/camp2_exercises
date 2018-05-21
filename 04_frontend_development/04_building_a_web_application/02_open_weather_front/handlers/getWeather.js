const fetch = require("node-fetch");

function weatherV(){
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=Versailles&units=metric&appid=${process.env.OWMAPIKEY}`)
  .then((response) => response.json());
}; // fonction qui ne renvoit qu'une promesse. elle traite l'info et renvoi du JSON mais ne fait pas de modification ni d'affichage HTML

function weatherByCityName(request, answer){
  const cityToGetWeather = request.params.cityId;
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityToGetWeather}&units=metric&appid=${process.env.OWMAPIKEY}`)
  .then((response) => response.json());
};

module.exports = {
  weatherV: weatherV,
  weatherByCityName: weatherByCityName
}
