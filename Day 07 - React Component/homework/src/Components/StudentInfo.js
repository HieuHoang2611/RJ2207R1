import React, { Component } from "react";

class ListClass extends Component {
  render() {
    return (
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
        {this.props.listStudent.map((item, index) => {
          return (
              <tr>
                <th> {index + 1} </th>
                <td> {item.name} </td>
                <td> {item.age} </td>
                <td> {item.address} </td>
              </tr>
          );
        })}
        </tbody>
      </table>
    );
  }
}
export default ListClass;