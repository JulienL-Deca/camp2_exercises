const PG = require("pg");

function sendCategories(request, answer){
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM categories;",
    function(error, result) {
      if (error) {
        answer.json(error);
      } else {
        answer.json(result.rows);
      }
    }
  );
}
function findById(categoryId, answer){
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM categories WHERE id = $1::uuid;", [categoryId],
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
function findProductByCategoryId(categoryId, answer){
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM products INNER JOIN join_categories_products on (products.id = join_categories_products.products_id) WHERE join_categories_products.category_id = $1::uuid;", [categoryId],
    function(error, result) {
      if (error) {
        console.warn(error);
        return error;
      } else {
        answer.json(result.rows);
      }
    }
  );
}
module.exports = {
  sendCategories: sendCategories,
  findById: findById,
  findProductByCategoryId: findProductByCategoryId
};
