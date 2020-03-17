import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";

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

class EventRow extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  handleDeleteButton(e) {
    e.preventDefault();
    if (!confirm("Are your sure you want to delete this item?")) {
      return false;
    }
    // xử lý delete
    // let url = window.Laravel.baseUrl + '/api/users/' + this.props.obj.id
    // axios.delete(url)
    //   .then(response => {
    //     this.props.deleteRow(this.props.index)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
    alert("Delete successfully");
  }

  fetchOption() {
    if (this.state.responses instanceof Array) {
      return this.state.responses.map((object, i) => {
        var tmp = object.answer;
        if (tmp === 1) {
          return <td>Yes</td>;
        } else if (tmp === 2) {
          return <td>No</td>;
        } else {
          return <td>Thinking</td>;
        }
      });
    }
  }
  componentDidMount() {
    console.log(this.props);
    let url =
      "https://miniproject-271309.appspot.com/api/responsedetail?responseid=" +
      this.props.obj.id;
    console.log(url);
    axios
      .get(url)
      .then(response => {
        this.setState({ responses: response.data, loading: false });
        console.log(this.state.responses);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    return (
      <tr>
        <td>{this.props.obj.nameuser}</td>
        {this.fetchOption()}
        <td>{this.props.obj.comment}</td>{" "}
        <td>
          <Link to="/responseDetail">
            <Button
              className="groupResponseButton"
              id="editResponseButton"
              type="submit"
            >
              Edit
            </Button>
          </Link>
          <Button
            className="groupResponseButton"
            id="deleteResponseButton"
            type="submit"
            onClick={this.handleDeleteButton}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
export default EventRow;
