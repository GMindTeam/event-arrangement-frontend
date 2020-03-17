import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import ResponseTable from "../components/ResponseTable";
import { Link } from "react-router-dom";

const Button = styled.button`
  background: ${props => (props.primary ? "#b042b4" : "white")};
  color: ${props => (props.primary ? "white" : "#b042b4")};
  font-size: 1em;
  border: 2px solid #b042b4;
  border-radius: 3em;
  display: block;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.19);
  }
  height: 30%;
`;

const Container = styled("div")`
  justify-self: center;
  position: relative;
  width: 50%;
  margin: auto;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 0px;
  margin-top: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .text-input {
    height: 100px;
    width: 80%;
    margin-left: 50px;
  }
  .text {
    height: 30%;
    padding-top: 30px;
  }
  .content {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
  .saveButton {
    padding: 0.25em 1em;
    margin: 20px -50px;
    /* margin-bottom: 20px; */
    position: relative;
    /* top: 60%; */
    left: 55%;
    bottom: 10px;
  }
  .table {
    margin-left: 50px;
    margin-bottom: 10px;
  }
  #warningName,
  #warningComment {
    display: none;
    color: red;
  }
`;

const Title = styled("div")`
  background-color: white;
  align-items: center;
  border-bottom: 1px solid #ccc;
  height: 4em;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  h3 {
    text-align: center;
    line-height: 60px;
    color: #b042b4;
  }
`;

class ResponseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      comment: ""
    };
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validateComment = this.validateComment.bind(this);
  }
  validateName() {
    if (this.state.name === "") {
      document.getElementById("warningName").style.display = "inline";
    } else {
      document.getElementById("warningName").style.display = "none";
    }
  }
  validateComment() {
    if (this.state.comment === "") {
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
  handleSaveButton() {
    if (this.state.comment !== "" && this.state.name !== "") {
      alert("Create response successfully!!!");
    } else {
      this.validateComment();
      this.validateName();
      alert("Don't let input empty");
    }
  }

  render() {
    return (
      <Container>
        <Title>
          <h3>Edit Response</h3>
        </Title>
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
          <Button
            className="saveButton"
            type="submit"
            onClick={this.handleSaveButton}
          >
            Save
          </Button>
        </div>
      </Container>
    );
  }
}

export default ResponseDetail;
