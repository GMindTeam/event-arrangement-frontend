import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import ResponseTable from "../components/ResponseTable";
import { Link } from "react-router-dom";
const Container = styled("div")`
  justify-self: center;
  position: relative;
  width: 50%;
  margin: auto;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-top: 50px;

  .text-input {
    height: 100px;
    width: 80%;
    margin-left: 50px;
    margin-top: 30px;
  }
  .text {
    height: 30%;
    width: 80%;
  }
  .content {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
    background-color: white;
  }
  .subButton {
    background-color: #b042b4;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 50px;
  }
  .subButton:hover {
    background-color: #810785;
  }

  .table {
    margin-left: 50px;
    margin-bottom: 10px;
  }
  .groupButton {
    margin-top: 50px;
  }
  #warningName,
  #warningComment {
    display: none;
    color: red;
  }
`;

class CreateResponse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      comment: ""
    };
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validateComment = this.validateComment.bind(this);
  }
  validateName() {
    if (this.state.name == "") {
      document.getElementById("warningName").style.display = "inline";
    } else {
      document.getElementById("warningName").style.display = "none";
    }
  }
  validateComment() {
    if (this.state.comment == "") {
      document.getElementById("warningComment").style.display = "inline";
    } else {
      document.getElementById("warningComment").style.display = "none";
    }
  }
  handleChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleChangeComment(e) {
    this.setState({
      comment: e.target.value
    });
  }
  handleSubmitButton() {
    if (this.state.comment != "" && this.state.name != "") {
      alert("Create response successfully!!!");
    } else {
      alert("Don't let input empty");
    }
  }

  render() {
    return (
      <Container>
        <div className="text-input">
          <label className="text">Your Name</label>
          <input
            className="content"
            id="name"
            onChange={this.handleChangeName}
            onBlur={this.validateName}
            value={this.state.name}
            required
          />
          <label id="warningName">Please type your name</label>
        </div>
        <div className="table">
          <label className="text">Options</label>
          <ResponseTable />
        </div>
        <div className="text-input">
          <label className="text">Comment</label>
          <input
            className="content"
            id="comment"
            onChange={this.handleChangeComment}
            onBlur={this.validateComment}
            value={this.state.comment}
            required
          />
          <label id="warningComment">Please type comment</label>
        </div>
        <div className="groupButton">
          <button
            className="subButton"
            type="submit"
            onClick={this.handleSubmitButton}
          >
            Submit
          </button>
        </div>
      </Container>
    );
  }
}

export default CreateResponse;
