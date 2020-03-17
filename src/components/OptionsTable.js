import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import OptionRow from "./OptionRow";

const Table = styled.div`
  margin-top: 15px;
  max-width: 100%;
  background-color: #fafafa;
  overflow: auto;
  max-height: 100px;
  th,
  td {
    text-align: left;
    width: 10%;
  }
  tr:nth-child(odd) {
    background-color: #fafafa;
  }
  tr:nth-child(even) {
    background-color: #fafafa;
  }
  tr:nth-child(1) {
    background-color: white;
  }
`;
class OptionsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.deleteRow = this.deleteRow.bind(this);
    this.fetchRows = this.fetchRows.bind(this);
  }
  deleteRow(key) {
    var arr = [...this.props.obj];
    arr.splice(key, 1);
    this.props.obj = arr;
    return this.props.handleChange(arr);
  }
  fetchRows() {
    if (this.props.obj instanceof Array) {
      return this.props.obj.map((object, i) => {
        return (
          <OptionRow
            obj={object}
            key={i}
            index={i}
            deleteRow={this.deleteRow.bind(this)}
          />
        );
      });
    }
  }
  render() {
    return (
      <Table>
        <tr>
          <th>Number</th>
          <th>Content</th>
          <th>Action</th>
        </tr>
        {this.fetchRows()}
      </Table>
    );
  }
}
export default OptionsTable;
