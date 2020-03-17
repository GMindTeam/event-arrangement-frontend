import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  background: ${props => (props.primary ? "#b042b4" : "white")};
  color: ${props => (props.primary ? "white" : "#b042b4")};
  font-size: 1em;
  border-radius: 3em;
  margin: 0.1em 0.1em;
  float: left;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.19);
  }
  background-color: #ff3547;
  border: 0px solid #9c27b0;
  color: white;
  padding: 0.1em 1em;
`;

class OptionRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: this.props.obj,
      index: this.props.index
    };
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  }
  handleDeleteButton(e) {
    e.preventDefault();
    if (!confirm("Are your sure you want to delete this item?")) {
      return false;
    }
    return this.props.deleteRow(this.props.index);
  }
  render() {
    return (
      <tr>
        <td>{this.state.index + 1}</td>
        <td>{this.state.option}</td>
        <Button onClick={this.handleDeleteButton}>Delete</Button>
      </tr>
    );
  }
}
export default OptionRow;
