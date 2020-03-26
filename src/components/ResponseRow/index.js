import React, { useState, useEffect } from "react";


function ResponseRow(props) {
  const[answer, setAnswer] = useState(props.row.answer);
  useEffect(() => {
    console.log(props.row)
    return () => {

    }
  }, [])


  return (
    <tr>
      <td>{props.row.content}</td>
      <td>
        <input type="radio"
          name={props.row.content}
          checked={(answer === "1")}
          onChange={() => {
            setAnswer("1")
            return props.handleChange("1");
          }}
        />
      </td>
      <td>
        <input type="radio"
          name={props.row.content}
          checked={(answer === "2")}
          onChange={() => {
            setAnswer("2")
            return props.handleChange("2");
          }}
        />
      </td>
      <td>
        <input type="radio"
          name={props.row.content}
          checked={(answer === "3")}
          onChange={() => {
            setAnswer("3")
            return props.handleChange("3");
          }}
        />
      </td>
    </tr>
  );
}
export default ResponseRow;
