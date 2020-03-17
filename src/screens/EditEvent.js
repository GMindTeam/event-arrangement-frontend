import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OptionsTable from "../components/OptionsTable";

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
  .react-datetime-picker {
    background-color: white;
  }
  .createButton {
    padding: 0.25em 1em;
    margin: 20px -50px;
    /* margin-bottom: 20px; */
    position: relative;
    /* top: 60%; */
    left: 50%;
    bottom: 10px;
  }
  .addButton {
    margin-left: 25px;
    color: ${props => (props.primary ? "white" : "#b042b4")};
  }

  .react-datetime-picker__button:enabled:hover
    .react-datetime-picker__button__icon,
  .react-datetime-picker__button:enabled:focus
    .react-datetime-picker__button__icon {
    stroke: #b042b4;
  }
  .calendar {
    margin-left: 50px;
    display: flex;
    margin-top: 90px;
  }
  #warningName,
  #warningDescription,
  #warningOptions {
    display: none;
    color: red;
  }
  .OptionsTable {
    width: 100%;
    margin-top: 10px;
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

class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: "",
      description: "",
      options: []
    };
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleCreateButton = this.handleCreateButton.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeOptions = this.handleChangeOptions.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validateDescription = this.validateDescription.bind(this);
    this.validateOptions = this.validateOptions.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }
  handleAddButton() {
    var str = this.state.date.toString();
    str = str.substring(0, 25);
    var obj = [...this.state.options];
    obj.push(str);
    this.setState({
      options: obj
    });
  }
  validateName() {
    if (this.state.name === "") {
      document.getElementById("warningName").style.display = "inline";
    } else {
      document.getElementById("warningName").style.display = "none";
    }
  }
  validateDescription() {
    if (this.state.description === "") {
      document.getElementById("warningDescription").style.display = "inline";
    } else {
      document.getElementById("warningDescription").style.display = "none";
    }
  }
  validateOptions() {
    var obj = [...this.state.options];
    if (obj.length === 0) {
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
  handleChangeOptions() {}
  handleChange(newOptions) {
    this.setState({ options: newOptions });
  }
  handleOnKeyDown(e) {
    if (e.key === "Enter") {
      var obj = [...this.state.options];
      var option = document.getElementById("options").value;
      obj.push(option);
      this.setState({
        options: obj
      });
    }
  }
  handleCreateButton() {
    // post data to server
    var obj = [...this.state.options];
    if (
      this.state.name !== "" &&
      this.state.description !== "" &&
      obj.length === 0
    ) {
      alert("Create event successfully!!!");
    } else {
      this.validateName();
      this.validateDescription();
      this.validateOptions();
      alert("Don't let input empty");
    }
  }
  onChange = date => this.setState({ date });
  render() {
    return (
      <Container>
        <Title>
          <h3>Create Event</h3>
        </Title>
        <div className="text-input">
          <label className="text">Name</label>
          <input
            className="content"
            id="name"
            placeholder="Type name of event"
            required
            onChange={this.handleChangeName}
            onBlur={this.validateName}
            value={this.state.name}
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
          <label className="text">Options</label>
          <input
            className="content"
            id="options"
            placeholder="Type options"
            onChange={this.handleChangeOptions}
            onBlur={this.validateOptions}
            onKeyDown={this.handleOnKeyDown}
            // value={this.state.options}
            required
          />
          <label id="warningOptions">Please type options</label>
          <OptionsTable
            obj={this.state.options}
            handleChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="calendar">
          {/* <button className="icon-calendar">this is icon</button> */}
          <DateTimePicker onChange={this.onChange} value={this.state.date} />

          <FontAwesomeIcon
            icon="plus-circle"
            className="addButton"
            type="submit"
            size="2x"
            onClick={this.handleAddButton}
          />

          <br />
        </div>
        <Button
          className="createButton"
          type="submit"
          onClick={this.handleCreateButton}
        >
          Create Event
        </Button>
      </Container>
    );
  }
}
export default EditEvent;
