const PG = require("pg");

function sendBrands(request, answer){
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands;",
    function(error, result) {
      if (error) {
        return error;
      } else {
        answer.json(result.rows);
      }
    }
  );
}
function findById(brandID, answer){
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands WHERE id = $1::uuid;", [brandID],
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
  sendBrands: sendBrands,
  findById: findById
};
