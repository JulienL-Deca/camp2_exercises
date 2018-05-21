const express = require("express");
const path = require("path");

const weather = require("./handlers/getWeather");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", function (request, result) {
  result.sendFile(path.join(__dirname,"index.html"));
});
app.get("/V", function (request, result) {
  weather.weatherV()
  .then((resultWeather) => {
    result.send(resultWeather);
  })
});
app.get("/:cityId", function (request, result) {
  weather.weatherByCityName(request, result)
  .then((resultWeather) => result.send(`${resultWeather.name}: ${resultWeather.main.temp} °C <IMG SRC=http://openweathermap.org/img/w/${resultWeather.weather[0].icon}.png>`))
});

app.get("/parameters/:myParam", function(request, result) {result.json(request.params.myParam);});
app.get("/parameters", function(request, result) {result.json(request.query);});

app.use(function (req, res, next) {res.status(404).send("404 NOT FOUND")});
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('ERROR 500 : Something broken!')
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
