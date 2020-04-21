import React, { useEffect } from "react";
import { Button } from "./style";
function EventRow(props) {

  useEffect(() => {
      
    return () => {
      
    }
  },[props.response.response_id]);

  function handleDeleteButton(e) {
    e.preventDefault();
    if (!window.confirm("Are your sure you want to delete this item?")) {
      return false;
    }
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
          return <td>Đồng ý</td>;
        } else if (answer === "2") {
          return <td>Không đồng ý</td>;
        } else if (answer === "3"){
          return <td>Suy nghĩ</td>;
        }
        else return <td>Chưa phản hồi</td>;
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
