const PG = require("pg");

function sendProducts(request, answer){
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM products;",
    function(error, result) {
      if (error) {
        return error;
      } else {
        answer.json(result.rows);
      }
    }
  );
}
function findById(productId, answer){
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM products WHERE id = $1::uuid;", [productId],
    function(error, result) {
      if (error) {
        console.warn(error);
        return error;
      } else {
        answer.json(result.rows[0]);
      }
    }
  );
}

module.exports = {
  sendProducts: sendProducts,
  findById: findById
};
