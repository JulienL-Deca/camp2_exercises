/*
request
Create a file called talk_with_postman_echo.js. It is in this file that we will expose a series of features to request the Postman echo API. This package should have a dependency with the package request.

In this file, you need to export an object with the functions you define for the tests to work. This object will have a 1:1 mapping with your function names, ie: if you have two functions doSomething and doSomethingElse, your export will look like:
*/
const webRequestGet = require("request");
/*
A first query
Let's write a function called simpleGet(callback) where the callback is a function with the parameter result. This function will perform a query on https://postman-echo.com/get and execute the callback by passing only the result of the query.
*/
function simpleGet(callback) {
  webRequestGet(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}
/*
Use parameters and arrays
Let's write a function called simpleGetWithParams(callback) where the callback is a function with the parameter result. This function will perform a query on https://postman-echo.com/get with a parameter foo which is equal to bar, a parameter program which is equal to camp2 and a parameter people which is an array with the values Frieda and Francis, and execute the callback by passing only the the field args from the result of the query.
*/
function simpleGetWithParams(callback){
  webRequestGet(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people[]=Frieda&people[]=Francis",
      method: "GET"
    },
    function (error, response, result) {
      callback(JSON.parse(result).args);
    }
  );
}
/*
Validating a timestamp
Using the object Date, let's write a function called validateTimestamp(callback) where the callback is a function with the parameter result. This function will perform a query on https://postman-echo.com/time/valid with a parameter timestamp wich is equal to the current date with the format YYYY-mm-dd and execute the callback by passing only the result of the query.
Be careful, the Date may have a risky behavior, you should test that it works before using it!
*/
function dateFormat(){
  const dateOfToday = new Date();
  let month = dateOfToday.getMonth()+1;
  if (month < 10) {
    month = "0" + month;
  }
  let day = dateOfToday.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  const dateToReturn = dateOfToday.getFullYear() + "-" + month + "-" + day;
  return dateToReturn;
}
function validateTimestamp(callback){
  const dateToTest = dateFormat();
  webRequestGet(
    {
      url: `https://postman-echo.com/time/valid?timestamp=${dateToTest}`,
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}

module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
}
