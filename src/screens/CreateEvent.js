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
`;

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      event: ""
    };
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleCreateButton = this.handleCreateButton.bind(this);
  }
  handleAddButton() {
    var oldText = document.getElementById("options").value;
    var str = this.state.date.toString();
    str = str.substring(0, 25);
    oldText += "\n" + str;
    document.getElementById("options").value = oldText;
  }
  handleCreateButton() {
    // post data to server
    var nameEvent = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var options = document.getElementById("options").value;
    var events = {
      name: nameEvent,
      description: description,
      options: options
    };
    this.setState({
      event: events
    });
    alert("Create event successfully!!!");
  }
  onChange = date => this.setState({ date });
  render() {
    return (
      <Container>
        <div className="text-input">
          <div className="text">Name</div>
          <input
            className="content"
            id="name"
            placeholder="Type name of event"
          />
        </div>
        <div className="text-input">
          <div className="text">Description</div>
          <textarea
            className="content"
            id="description"
            placeholder="Type description"
          />
        </div>
        <div className="text-input">
          <div className="textarea">Options</div>
          <textarea
            className="content"
            id="options"
            placeholder="Type options"
            style={{ height: "100px" }}
          />
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
          onClick={this.handleCreateButton}
        >
          Create Event
        </button>
      </Container>
    );
  }
}
export default CreateEvent;
