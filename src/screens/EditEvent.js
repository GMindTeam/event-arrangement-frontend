import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";

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
  }
  .text {
    height: 30%;
  }
  .content {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
  button {
    background-color: #b042b4;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #810785;
  }

  .addButton {
    margin-top: 10px;
    margin-left: 10px;
  }
  .createButton {
    margin-top: 50px;
    margin-left: 50px;
  }

  .calendar {
    margin-top: 50px;
    margin-left: 50px;
    display: flex;
  }

  #warningName,
  #warningDescription,
  #warningOptions {
    display: none;
    color: red;
  }
`;

class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: "",
      description: "",
      options: ""
    };
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handdleChangeOptions = this.handdleChangeOptions.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validateDescription = this.validateDescription.bind(this);
    this.validateOptions = this.validateOptions.bind(this);
  }
  handleAddButton() {
    var oldText = document.getElementById("options").value;
    var str = this.state.date.toString();
    str = str.substring(0, 25);
    oldText += "\n" + str;
    document.getElementById("options").value = oldText;
  }
  validateName() {
    if (this.state.name == "") {
      document.getElementById("warningName").style.display = "inline";
    } else {
      document.getElementById("warningName").style.display = "none";
    }
  }
  validateDescription() {
    if (this.state.description == "") {
      document.getElementById("warningDescription").style.display = "inline";
    } else {
      document.getElementById("warningDescription").style.display = "none";
    }
  }
  validateOptions() {
    if (this.state.options == "") {
      document.getElementById("warningOptions").style.display = "inline";
    } else {
      document.getElementById("warningOptions").style.display = "none";
    }
  }
  handleChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  handleChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  handdleChangeOptions(e) {
    this.setState({
      options: e.target.value
    });
  }
  handleSaveButton() {
    // post data to server
    if (
      this.state.name != "" &&
      this.state.description != "" &&
      this.state.options != ""
    ) {
      alert("Save event successfully!!!");
    } else {
      alert("Don't let input empty");
    }
  }

  onChange = date => this.setState({ date });
  render() {
    return (
      <Container>
        <div className="text-input">
          <label className="text">Name</label>
          <input
            className="content"
            id="name"
            placeholder="Type name of event"
            onChange={this.handleChangeName}
            onBlur={this.validateName}
            value={this.state.name}
            required
          />
          <label id="warningName">Please type name of event</label>
        </div>
        <div className="text-input">
          <label className="text">Description</label>
          <input
            className="content"
            id="description"
            placeholder="Type description"
            onChange={this.handleChangeDescription}
            onBlur={this.validateDescription}
            value={this.state.description}
            required
          />
          <label id="warningDescription">Please type description</label>
        </div>
        <div className="text-input">
          <label className="textarea">Options</label>
          <textarea
            className="content"
            id="options"
            placeholder="Type options"
            style={{ height: "100px" }}
            onChange={this.handdleChangeOptions}
            onBlur={this.validateOptions}
            value={this.state.options}
            required
          />
          <label id="warningOptions">Please type options</label>
        </div>
        <div className="calendar">
          {/* <button className="icon-calendar">this is icon</button> */}
          <DateTimePicker onChange={this.onChange} value={this.state.date} />

          <button
            className="addButton"
            type="submit"
            onClick={this.handleAddButton}
          >
            Add option
          </button>
        </div>

        <button
          className="createButton"
          type="submit"
          onClick={this.handleSaveButton}
        >
          Save
        </button>
      </Container>
    );
  }
}
export default EditEvent;
