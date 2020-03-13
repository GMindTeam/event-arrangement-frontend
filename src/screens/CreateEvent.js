import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = styled.button`
  background: ${props => (props.primary ? "#b042b4" : "white")};
  color: ${props => (props.primary ? "white" : "#b042b4")};
  font-size: 1em;
  border: 2px solid #b042b4;
  border-radius: 3em;
  display: block;
  :hover {
    border: 2px solid #9c27b0;
    color: #9c27b0;
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
  .react-datetime-picker{
    background-color : white;
  }
  .createButton{
    
    padding: 0.25em 1em;
    margin: 20px -50px;
    /* margin-bottom: 20px; */
    position: relative;
    /* top: 60%; */
    left: 50%;
    bottom: 10px;
  }
  .addButton{
    margin-left: 25px;
    color: ${props => (props.primary ? "white" : "#b042b4")};
  }
  
  .react-datetime-picker__button:enabled:hover .react-datetime-picker__button__icon, .react-datetime-picker__button:enabled:focus .react-datetime-picker__button__icon {
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
`;
const Title = styled("div")`
  background-color: white;
  align-items: center;
  border-bottom: 1px solid #ccc;
  height: 4em;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  h3{
    text-align: center;
    line-height: 60px;
    color: #b042b4;
  }
`

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: "",
      description: "",
      options: ""
    };
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleCreateButton = this.handleCreateButton.bind(this);
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
  handleCreateButton() {
    // post data to server
    if (
      this.state.name != "" &&
      this.state.description != "" &&
      this.state.options != ""
    ) {
      alert("Create event successfully!!!");
    } else {
      alert("Don't let input empty");
    }
  }
  onChange = date => this.setState({ date });
  render() {
    return (
      <Container>
        <Title><h3>Create Event</h3></Title>
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

            <FontAwesomeIcon icon="plus-circle" 
            className="addButton"
            type="submit"
            size="2x"
            onClick={this.handleAddButton}/>
         
          
        <br></br>
         


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
export default CreateEvent;
