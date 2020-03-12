import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import ReponseDetail from "../screens/ResponseDetail";

const Table = styled.div`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    border: 1px solid #868585;
  }
  th,
  td {
    text-align: left;
    padding: 10px;
  }
  tr:nth-child(odd) {
    background-color: white;
  }
  tr:nth-child(even) {
    background-color: white;
  }
  tr:nth-child(1) {
    background-color: #d980dc;
  }
  .groupResponseButton {
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 1px;
    margin-top: 1px;
  }
  #editResponseButton {
    background-color: #f99006;
  }
  #deleteResponseButton {
    background-color: #3ce929;
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
          return <th>Yes</th>;
        } else if (tmp == 2) {
          return <th>No</th>;
        } else {
          return <th>Thinking</th>;
        }
      });
    }
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
            <th>{object.comment}</th>
            <th>
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
            </th>
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
            <th />
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
