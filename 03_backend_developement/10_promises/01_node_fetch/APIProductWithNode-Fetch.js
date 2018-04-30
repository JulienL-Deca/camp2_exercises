const fetch = require("node-fetch");

const uuidPorductToFetch = "efe288cb-fb63-4b23-b8df-529f04b8b02b";

fetch(`https://decath-product-api.herokuapp.com/products/${uuidPorductToFetch}`)
  .then((response) => response.json())
  .then(function (result) {
    console.log("JSON result: \n", result);
    return result.brand_id;
  })
  .catch((error) => console.warn("catch an error 1er fetch ! => ",error))
  .then(function(result) {
    return fetch(`https://decath-product-api.herokuapp.com/brands/${result}`)
  })
  .then((response) => response.json())
  .then((result) => console.log("Brand name:\n ", result.title))
  .catch((error) => console.log("catch an error 2eme fetch ! => ",error));
