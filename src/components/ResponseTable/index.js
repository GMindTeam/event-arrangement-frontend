import React, { useState, useEffect } from "react";
import { Table } from "./style";
import ResponseRow from "../ResponseRow"

function ResponseTable(props) {
  const [responselist, setResponseList] = useState();
  useEffect(() => {
    var arr = [];
    if (props.type === "edit") {
      var titles = [...props.titles];
      var answerlist = [...props.responselist];
      for(var i=0; i<titles.length; i++){
        var obj = {
          optionid: titles[i].id,
          content: titles[i].content,
          answer: answerlist[i].response_answer
        }
        arr.push(obj);
      }
      setResponseList(arr);
    }
    else {
      if (props.titles instanceof Array) {
        props.titles.map((title, i) => {
          var obj = {
            optionid: title.id,
            content: title.content,
            answser: "4"
          }
          arr.push(obj)
        })
      }
      setResponseList(arr);
    }
    return () => {

    }
  }, [props.responselist])

  function fetchOption() {
    if (responselist instanceof Array) {
      return responselist.map((response, i) => {
        return <ResponseRow row={response} key={i} index={i}
          handleChange={(anwser) => {
            var arr = [...responselist];
            var tmp = {
              optionid: response.optionid,
              content: response.content,
              answer: anwser
            }
            arr[i] = tmp
            setResponseList(arr);
            var isChecked = true;
            for(var j=0; j<arr.length; j++){
              if(arr[j].answer === "4" || arr[j].answer === undefined) isChecked = false
            }
            return props.handleChangeResponse(arr, isChecked)
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