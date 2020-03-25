import React ,{useEffect}from "react";


function ResponseRow(props) {
useEffect(() => {
  return () => {
    
  }
}, [])


  return (
    <tr>
      <td>{props.title.content}</td>
      <td>
        <input type="radio" name={props.title.content} />
      </td>
      <td>
        <input type="radio" name={props.title.content} />
      </td>
      <td>
        <input type="radio" name={props.title.content} />
      </td>
    </tr>
  );
}
export default ResponseRow;
