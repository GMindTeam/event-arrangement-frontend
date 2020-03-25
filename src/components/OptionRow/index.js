import React from "react";
import { Button } from "./style";

export default function OptionRow(props) {

  function handleDeleteButton(e) {
    e.preventDefault();
    if (!window.confirm("Are your sure you want to delete this item?")) {
      return false;
    }
    return props.deleteRow(props.index);
  }

  return (
    <tr>
      <th>{props.index + 1}</th>
<<<<<<< HEAD
      <td className="optionContent">{props.option}</td>
=======
      <td className="optionContent">{props.obj}</td>
>>>>>>> 04db4bbf76e438d90e8825f5990b39cc0242097e
      <td>
      <Button onClick={handleDeleteButton}>Delete</Button>
      </td>
      
    </tr>
  );
}

