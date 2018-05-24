import React, { Component } from 'react';

class Line extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.decathlon_id}</td>
        <td>{this.props.title}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default Line;
