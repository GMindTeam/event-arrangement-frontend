import React, { useEffect } from "react";
import { Button } from "./style";
import { deleteResponse} from "../../api/"
function EventRow(props) {
  function handleDeleteButton(e) {
    e.preventDefault();
    if (!window.confirm("Are your sure you want to delete this item?")) {
      return false;
    }
    deleteResponse('',props.obj.response_id)
        .catch(function (error) {
          console.log(error);
        });
        alert('Deleting. When it done table will refresh');
    // return props.deleteRow(props.index);
        
  }
  useEffect(() => {
    return () => {
      
    }
  })
  function fetchOption() {
    if (props.obj.response_detail_list instanceof Array) {
      return props.obj.response_detail_list.map((object, i) => {
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
        <td className="responseContent">{props.obj.response_nameUser}</td>
        {fetchOption()}
        <td>{props.obj.response_comment}</td>
        <td id="action">
          <Button
            className="groupResponseButton"
            id="editResponseButton"
            onClick={props.handlerEdit}
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
