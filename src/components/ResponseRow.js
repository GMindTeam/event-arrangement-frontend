import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class ResponseRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: this.props.obj
    };
  }
  render() {
    return (
      <tr>
        <td>{this.state.responses.content}</td>
        <td>
          <input type="radio" name={this.state.responses.content} />
        </td>
        <td>
          <input type="radio" name={this.state.responses.content} />
        </td>
        <td>
          <input type="radio" name={this.state.responses.content} />
        </td>
      </tr>
    );
  }
}
export default ResponseRow;
