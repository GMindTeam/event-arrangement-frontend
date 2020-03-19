import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./style";

function EventRow() {
  // const [loading, setLoading] = useState(true);
  function handleDeleteButton(e) {
    e.preventDefault();
    if (!window.confirm("Are your sure you want to delete this item?")) {
      return false;
    }
    alert("Delete successfully");
  }
  function fetchOption() {
    if (this.props.obj.response_detail_list instanceof Array) {
      return this.props.obj.response_detail_list.map((object, i) => {
        var tmp = object.response_answer;
        if (tmp === "1") {
          return <td>Yes</td>;
        } else if (tmp === "2") {
          return <td>No</td>;
        } else {
          return <td>Thinking</td>;
        }
      });
    }
  }

    return (
      <tr>
        <td>{this.props.obj.response_nameUser}</td>
        {fetchOption()}
        <td>{this.props.obj.response_comment}</td>
        <td>
          <Link
            to={
              "/editResponse/" +
              this.props.obj.response_id +
              "&" +
              this.props.eventid
            }
          >
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

export default EventRow;
