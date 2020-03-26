import React, { useState, useEffect } from "react";
import { Table } from "./style";
import ResponseRow from "../ResponseRow"

function ResponseTable(props) {
  const [responselist, setResponseList] = useState();
  useEffect(() => {
    var arr = [];
    if (props.type === "edit") {
      var titles = [...props.titles];
      var answerlist = [...props.responselist]
      for(var i=0; i<titles.length; i++){
        var obj = {
          optionid: titles[i].id,
          content: titles[i].content,
          answer: answerlist[i].response_answer
        }
        arr.push(obj)
      }
      setResponseList(arr)
    }
    else {
      if (props.titles instanceof Array) {
        props.titles.map((title, i) => {
          var obj = {
            optionid: title.id,
            content: title.content,
            answser: "0"
          }
          arr.push(obj)
        })
      }
      setResponseList(arr);
    }
    return () => {

    }
  }, [])

  function fetchOption() {
    if (responselist instanceof Array) {
      return responselist.map((obj, i) => {
        return <ResponseRow row={obj} key={i} index={i}
          handleChange={(anwser) => {
            var arr = [...responselist];
            var tmp = {
              optionid: obj.optionid,
              content: obj.content,
              answer: anwser
            }
            arr[i] = tmp
            setResponseList(arr);
            return props.handleChangeResponse(arr)
          }} />;
      });
    }
  }


  return (
    <div>
      <Table>
        <tr>
          <th>Options</th>
          <th>Yes</th>
          <th>No</th>
          <th>Thinking</th>
        </tr>
        {fetchOption()}
      </Table>
    </div>
  );
}


export default ResponseTable;
