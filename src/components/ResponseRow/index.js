import React, { useState } from "react";


function ResponseRow(props) {
  const [responses] = useState(props.obj);


  return (
    <tr>
      <td>{this.state.responses.content}</td>
      <td>
        <input type="radio" name={responses.content} />
      </td>
      <td>
        <input type="radio" name={responses.content} />
      </td>
      <td>
        <input type="radio" name={responses.content} />
      </td>
    </tr>
  );
}
export default ResponseRow;
