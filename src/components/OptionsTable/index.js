import React   from "react";
import OptionRow from "../OptionRow";
import { Table } from "./style";

function  OptionsTable (props) {

  function deleteRow(key) {
    var arr = [...props.options];
    arr.splice(key, 1);
    return props.handleChange(arr);
  }
  function fetchRows() {
    if (props.options instanceof Array) {
      return props.options.map((option, i) => {
        return (
          <OptionRow
            option={option}
            key={i}
            index={i}
            deleteRow={deleteRow}
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
