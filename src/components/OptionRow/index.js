import React, { useState, useEffect } from "react";
import { Button } from "./style";

export default function OptionRow(props) {
  const [option, setOption] = useState(props.obj);
  const [index, setIndex] = useState(props.index);

  function handleDeleteButton(e) {
    e.preventDefault();
    if (!window.confirm("Are your sure you want to delete this item?")) {
      return false;
    }
    return props.deleteRow(props.index);
  }

  return (
    <tr>
      <th>{index + 1}</th>
      <td className="optionContent">{option}</td>
      <td>
      <Button onClick={handleDeleteButton}>Delete</Button>
      </td>
      
    </tr>
  );
}

