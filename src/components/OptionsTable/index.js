import React, { Component, useEffect } from "react";
import { OptionRow } from "../../components";
import { Table } from "./style";

function  OptionsTable (props) {
  useEffect(()=>{

  })
  function deleteRow(key) {
    var arr = [...props.obj];
    arr.splice(key, 1);
    props.obj = arr;
    return props.handleChange(arr);
  }
  function fetchRows() {
    if (props.obj instanceof Array) {
      return props.obj.map((object, i) => {
        return (
          <OptionRow
            obj={object}
            key={i}
            index={i}
            deleteRow={deleteRow.bind(this)}
          />
        );
      });
    }
  }

    return (
      <Table>
        <tr>
          <th>Number</th>
          <th>Content</th>
          <th>Action</th>
        </tr>
        {fetchRows()}
      </Table>
    );
}
export default OptionsTable;
