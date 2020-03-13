import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import ReponseDetail from "../screens/ResponseDetail";

const Table = styled.div`
  margin-top: 15px;
  max-width: 90%;
  th,
  td {
    /* border: 1px solid #868585; */
  }
  th,
  td {
    text-align: left;
    width: 10%;
    /* padding: 10px; */
  }
  tr:nth-child(odd) {
    background-color: #fafafa;
  }
  tr:nth-child(even) {
    background-color: #fafafa;
  }
  tr:nth-child(1) {
    background-color: white;
  }
  .groupResponseButton {
    background: ${props => (props.primary ? "#b042b4" : "white")};
  color: ${props => (props.primary ? "white" : "#b042b4")};
  font-size: 1em;
  border-radius: 3em;
  margin: 0.1em 0.1em;
  float: left;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.19);
  }
  }
  #editResponseButton {
    background-color: #00C851;
    border: 0px solid #9c27b0;
    color: white;
    padding: 0.1em 1em;
  }
  #deleteResponseButton {
    background-color: #ff3547;
    border: 0px solid #9c27b0;
    color: white;
    padding: 0.1em 1em;
  }
`;


class EventTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  }

  fetchOption(responsedetail) {
    if (responsedetail instanceof Array) {
      return responsedetail.map((object, i) => {
        var tmp = object.answer;
        if (tmp == 1) {
          return <td>Yes</td>;
        } else if (tmp == 2) {
          return <td>No</td>;
        } else {
          return <td>Thinking</td>;
        }
      });
    }
  }

  handleDeleteButton(e) {
    e.preventDefault();
    // if (!confirm("Are your sure you want to delete this item?")) {
    //   return false;
    // }
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

  fetchRows() {
    var rows = [
      {
        nameuser: "Duy",
        eventid: 1,
        comment: "Nothing",
        responsedetail: [
          {
            optionid: 1,
            answer: 1
          },
          {
            optionid: 2,
            answer: 1
          }
        ]
      },
      {
        nameuser: "Phuong",
        eventid: 1,
        comment: "Nothing",
        responsedetail: [
          {
            optionid: 1,
            answer: 1
          },
          {
            optionid: 2,
            answer: 1
          }
        ]
      }
    ];
    if (rows instanceof Array) {
      return rows.map((object, i) => {
        return (
          <tr>
            <th>{object.nameuser}</th>
            {this.fetchOption(object.responsedetail)}
            <td>{object.comment}</td>
            <td>
              <Link to="/responseDetail">
                <button
                  className="groupResponseButton"
                  id="editResponseButton"
                  type="submit"
                >
                  Edit
                </button>
              </Link>
              <button
                className="groupResponseButton"
                id="deleteResponseButton"
                type="submit"
                onClick={this.handleDeleteButton}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    }
  }

  fetchTitle() {
    var titles = [
      {
        id: 1,
        eventid: "3f3a6241-f992-48f0-a988-6b3eb9a5e230",
        content: "11h",
        created_at: "2020-03-10 09:29:24",
        updated_at: "2020-03-10 09:29:24"
      },
      {
        id: 2,
        eventid: "3f3a6241-f992-48f0-a988-6b3eb9a5e230",
        content: "13h",
        created_at: "2020-03-10 09:29:24",
        updated_at: "2020-03-10 09:29:24"
      }
    ];

    if (titles instanceof Array) {
      return titles.map((object, i) => {
        return <th> {object.content}</th>;
      });
    }
  }

  render() {
    return (
      <div>
        <Table>
          <tr>
            <th>Name</th>
            {this.fetchTitle()}
            <th>Comment</th>
            <th>Actions</th>
          </tr>
          {this.fetchRows()}
        </Table>
      </div>
    );
  }
}

export default EventTable;
