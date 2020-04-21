import React, { useEffect } from "react";
import { Button } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faTimes, faQuestion} from '@fortawesome/free-solid-svg-icons';
function EventRow(props) {

  useEffect(() => {
      
    return () => {
      
    }
  },[props.response.response_id]);

  function handleDeleteButton(e) {
    props.handlerDelete(props.response.response_id);
  }
  function handleEditButton(e) {
    e.preventDefault();
    props.handlerEdit(props.response);
  }
  
  function fetchOption() {
    if (props.response.response_detail_list instanceof Array) {
      return props.response.response_detail_list.map((responseDetail, i) => {
        var answer = responseDetail.response_answer;
        if (answer === "1") {
          return <td key={i}><FontAwesomeIcon icon={faCheck} /></td>;
        } else if (answer === "2") {
          return <td key={i}><FontAwesomeIcon icon={faTimes} /></td>;
        } else if (answer === "3"){
          return <td key={i}><FontAwesomeIcon icon={faQuestion} /></td>;
        }
        else return <td key={i}>Chưa phản hồi</td>;
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
            Sửa
          </Button>
          <Button
            className="groupResponseButton"
            id="deleteResponseButton"
            onClick={handleDeleteButton}
          >
            Xóa
          </Button>
         
        </td>
      </tr>
    );
  }

export default EventRow;
