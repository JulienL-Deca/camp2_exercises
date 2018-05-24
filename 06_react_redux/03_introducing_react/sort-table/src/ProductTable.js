import React, { Component } from 'react';
import products from './listOfproducts';
import _ from 'underscore';

function TableContent(props){
  return(
    <tbody>
    {props.tableObjects.map((oneObject, index) => {
      return (<tr key={index}>
      <td>{oneObject.decathlon_id}</td>
      <td>{oneObject.title}</td>
      <td>{oneObject.price} €</td>
      </tr>)
    })}
    </tbody>
  );
}
function MakeTableHeader(props){
  return (
    <thead className="thead-dark">
      <tr>
        {Object.keys(props.tableObject).map((oneHeader, index) => {
          return <th key={index} scope="col">{oneHeader}</th>
        })}
      </tr>
    </thead>
  );
}
class ProductTable extends Component {
  render() {
    return (
    <div className="container">
      <div className="ProductTable row justify-content-md-center">
        <div className="col-auto">
          <p>My table will be print here !</p>

          <table className="table table-hover table-striped table-sm table-bordered">

            <MakeTableHeader tableObject = {products[0]} />
            <TableContent tableObjects = {products} />

          </table>

        </div>
      </div>
    </div>
    );
  }
}

export default ProductTable;
