import React from "react";


function ResponseRow(props) {



  return (
    <tr>
      <td>{props.obj.content}</td>
      <td>
        <input type="radio" name={props.obj.content} />
      </td>
      <td>
        <input type="radio" name={props.obj.content} />
      </td>
      <td>
        <input type="radio" name={props.obj.content} />
      </td>
    </tr>
  );
}
export default ResponseRow;
