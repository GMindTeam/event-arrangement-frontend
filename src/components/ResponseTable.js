import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import ResponseRow from "./ResponseRow";

const Table = styled.div`
  margin-top: 15px;
  max-width: 90%;
  background-color: #fafafa;
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
        return <ResponseRow obj={object} key={i} />;
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
