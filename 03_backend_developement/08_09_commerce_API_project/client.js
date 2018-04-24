const webRequest = require("request");
const { Pool } = require("pg");
const pool = new Pool();

// callBrandsAPI();
function callBrandsAPI(){
  webRequest.get(
    {
      url: "https://decath-product-api.herokuapp.com/brands"
    },
    function (error, response, body) {
      const jsonTabRequest = JSON.parse(body).map(infos =>
        addOneLineIntoTableBRANDS([infos.id, infos.title])
      );
      console.log(jsonTabRequest);
    });
}
// addOneLineIntoTableBRANDS(["7072cc1d-25f1-4ddc-bc6e-2ee38f474f79","BLIZZARD"]);
function addOneLineIntoTableBRANDS(dataToInsert){
  pool.query(
    "INSERT INTO brands (id, title) VALUES ($1::uuid, $2::varchar)", dataToInsert,
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        console.log(`${result.command} ${result.rowCount} | ${dataToInsert}`);
      }
    }
  );
}
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

// callCategoriesAPI();
function callCategoriesAPI(){
  webRequest.get(
    {
      url: "https://decath-product-api.herokuapp.com/categories"
    },
    function (error, response, body) {
      const jsonTabRequest = JSON.parse(body).map(infos =>
        addOneLineIntoTableCATEGORIES([infos.id, infos.decathlon_id, infos.label]));
      console.log(jsonTabRequest);
    });
}

function addOneLineIntoTableCATEGORIES(dataToInsert){
  pool.query(
    "INSERT INTO categories (id, decathlon_id, label) VALUES ($1::uuid, $2::integer, $3::varchar)", dataToInsert,
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        console.log(`${result.command} ${result.rowCount} | ${dataToInsert}`);
      }
    }
  );
}

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

// callProductsAPI();
function callProductsAPI(){
  webRequest.get(
    {
      url: "https://decath-product-api.herokuapp.com/products"
    },
    function (error, response, body) {
      const jsonTabRequest = JSON.parse(body).map(infos =>
        addOneLineIntoTablePRODUCTS([infos.id, infos.decathlon_id, infos.title, infos.description, infos.brand_id, infos.min_price, infos.max_price, infos.crossed_price, infos.percent_reduction, infos.image_path, infos.rating]));
      console.log(jsonTabRequest);
    });
}

function addOneLineIntoTablePRODUCTS(dataToInsert){
  pool.query(
    "INSERT INTO products (id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating) VALUES ($1::uuid, $2::integer, $3::varchar, $4::varchar, $5::uuid, $6::float, $7::float, $8::float, $9::smallint, $10::varchar, $11::float)", dataToInsert,
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        console.log(`${result.command} ${result.rowCount} | ${dataToInsert}`);
      }
    }
  );
}

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
function categorieId (){
  webRequest(
    { url: "https://decath-product-api.herokuapp.com/categories"
    },
    function(error, result, body) {
      const categories = JSON.parse(body);
      categories.forEach( categoryId => APIJoinProductsCategories (categoryId.id));
    }
  );
}
function APIJoinProductsCategories (cat_id) {
  webRequest(
    { url: `https://decath-product-api.herokuapp.com/categories/${cat_id}/products`
    },
    function(error, result, body) {
      console.log(body);
      const products = JSON.parse(body);
      // client.connect();
      products.forEach( product => insertDataJoin([cat_id, product.id]));
      console.log(products);
    }
  );
}
function insertDataJoin(dataToInsert) {
  pool.query(
    "INSERT INTO join_categories_products (category_id, products_id) VALUES ($1::uuid, $2::uuid)",
    dataToInsert,
    function(error, result) {
      if (error) {
        console.warn(error);
        return;
      }
      console.log(`${result.command} - ${dataToInsert}`);
    }
  );
}
// categorieId();
