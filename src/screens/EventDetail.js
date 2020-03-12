import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import EventTable from "../components/EventTable";
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
  }
  .text {
    height: 30%;
    width: 80%;
    margin-bottom: 10px;
  }
  .content {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
    margin-top: 10px;
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
  }
  .groupButton {
    margin-top: 50px;
  }
`;

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: ""
    };
    this.fetchName = this.fetchName.bind(this);
    this.fetchDescription = this.fetchDescription.bind(this);
  }

  fetchName() {
    var obj = {
      id: "3f3a6241-f992-48f0-a988-6b3eb9a5e230",
      name: "Party",
      description: "Hello Party",
      created_at: "2020-03-10 09:29:24",
      updated_at: "2020-03-10 09:29:24"
    };
    return (
      <div className="text-input">
        <div className="text">Name</div>
        <text className="content" id="name">
          {obj.name}
        </text>
      </div>
    );
  }
  fetchDescription() {
    var obj = {
      id: "3f3a6241-f992-48f0-a988-6b3eb9a5e230",
      name: "Party",
      description: "Hello Party",
      created_at: "2020-03-10 09:29:24",
      updated_at: "2020-03-10 09:29:24"
    };
    return (
      <div className="text-input">
        <div className="text">Description</div>
        <text className="content" id="description">
          {obj.description}
        </text>
      </div>
    );
  }

  render() {
    return (
      <Container>
        {this.fetchName()}
        {this.fetchDescription()}
        <div className="table">
          <div className="text">Options</div>
          <EventTable />
        </div>

        <div className="groupButton">
          <Link to="/createResponse">
            <button className="subButton" type="submit">
              Create Response
            </button>
          </Link>
          <Link to="/editEvent">
            <button className="subButton" type="submit">
              Edit Event
            </button>
          </Link>
        </div>
      </Container>
    );
  }
}

export default EventDetail;
