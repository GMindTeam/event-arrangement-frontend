import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";

const Table = styled.div`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    border: 1px solid #868585;
  }
  th,
  td {
    text-align: center;
    padding: 10px;
  }
  tr:nth-child(odd) {
    background-color: white;
  }
  tr:nth-child(even) {
    background-color: white;
  }
  tr:nth-child(1) {
    background-color: #d980dc;
  }
  .groupResponseButton {
    background-color: #d980dc;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 1px;
    margin-top: 1px;
  }
  .groupResponseButton:hover {
    background-color: #b042b4;
  }
`;

class ResponseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fetchOption = this.fetchOption.bind(this);
  }

  fetchOption() {
    var rows = [
      {
        id: 1,
        eventid: "3f3a6241-f992-48f0-a988-6b3eb9a5e230",
        content: "11h",
        created_at: "2020-03-10 09:29:24",
        updated_at: "2020-03-10 09:29:24"
      },
      {
        id: 2,
        eventid: "3f3a6241-f992-48f0-a988-6b3eb9a5e230",
        content: "13h",
        created_at: "2020-03-10 09:29:24",
        updated_at: "2020-03-10 09:29:24"
      }
    ];

    if (rows instanceof Array) {
      return rows.map((object, i) => {
        return (
          <tr>
            <td>{object.content}</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <Table>
          <tr>
            <th>Options</th>
            <th>Yes</th>
            <th>No</th>
            <th>Thinking</th>
          </tr>
          {this.fetchOption()}
        </Table>
      </div>
    );
  }
}

export default ResponseTable;
