import React, { useEffect } from "react";
import { Button } from "./style";
import { deleteResponse} from "../../api/"
function EventRow(props) {
  function handleDeleteButton(e) {
    e.preventDefault();
    if (!window.confirm("Are your sure you want to delete this item?")) {
      return false;
    }
    deleteResponse('',props.response.response_id)
        .catch(function (error) {
          console.log(error);
        });
        alert('Deleting. When it done table will refresh');
    // return props.deleteRow(props.index);
        
  }
  function handleEditButton(e) {
    e.preventDefault();
    props.handlerEdit(props.response);
  }
  useEffect(() => {
    return () => {
      
    }
  })
  function fetchOption() {
    if (props.response.response_detail_list instanceof Array) {
      return props.response.response_detail_list.map((responseDetail, i) => {
        var answer = responseDetail.response_answer;
        if (answer === "1") {
          return <td>Yes</td>;
        } else if (answer === "2") {
          return <td>No</td>;
        } else if (answer === "3"){
          return <td>Thinking</td>;
        }
        else return <td>Not response yet</td>;
      });
    }
  }

    return (
      <tr>
        <td className="responseContent">{props.response.response_nameUser}</td>
        {fetchOption()}
        <td>{props.response.response_comment}</td>
        <td id="action">
          <Button
            className="groupResponseButton"
            id="editResponseButton"
            onClick={handleEditButton}
          >
            Edit
          </Button>
          <Button
            className="groupResponseButton"
            id="deleteResponseButton"
            onClick={handleDeleteButton}
          >
            Delete
          </Button>
         
        </td>
      </tr>
    );
  }

export default EventRow;
