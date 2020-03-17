import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import EventTable from "../components/EventTable";
import { Link } from "react-router-dom";
import {RingLoader} from "react-spinners";
const Button = styled.button`
  background: ${props => (props.primary ? "#b042b4" : "white")};
  color: ${props => (props.primary ? "white" : "#b042b4")};
  font-size: 1em;
  margin: 1em 3em;
  padding: 0.25em 1em;
  margin-right: 5em;
  border: 2px solid #b042b4;
  border-radius: 3em;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.19);
  }
`;

const Container = styled("div")`
  width: 50%;
  margin: auto;
  border-radius: 5px;
  background-color: #f2f2f2;
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
  .eventName,
  .eventDescription {
    margin-left: 50px;
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
  .subButton:hover {
    background-color: #810785;
  }
  .table {
    margin-left: 50px;
    margin-bottom: 0px;
  }
  .groupButton {
    margin-top: 0px;
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
  margin-bottom: 20px;
`;

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: "",
      loading: true
    };
    this.fetchName = this.fetchName.bind(this);
    this.fetchDescription = this.fetchDescription.bind(this);
  }

  fetchName() {
    return (
      <div>
        <h2 className="eventName">{this.state.event.name}</h2>
      </div>
    );
  }
  fetchDescription() {
    return (
      <div>
        <p className="eventDescription">{this.state.event.description}</p>
      </div>
    );
  }

  componentDidMount() {
    let url =
      "https://miniproject-271309.appspot.com/api/event/" +
      this.props.match.params.eventID;
    axios
      .get(url)
      .then(response => {
        this.setState({ event: response.data,loading: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    if(this.state.loading){
      return <RingLoader />
    }
    return (
      <Container>
        <Title>
          <h3>Event Detail</h3>
        </Title>
        <div>
          <h2 className="eventName">{this.state.event.name}</h2>
        </div>
        <div>
          <p className="eventDescription">{this.state.event.description}</p>
        </div>
        <div className="table">
          <div className="text">Options</div>
          <EventTable eventId={this.props.match.params.eventID} />
        </div>

        <div className="groupButton">
          <Link to="/createResponse">
            <Button type="submit">Create Response</Button>
          </Link>
          <Link to={"/editEvent/" + this.state.event.id}>
            <Button type="submit">Edit Event</Button>
          </Link>
        </div>
      </Container>
    );
  }
}

export default EventDetail;
