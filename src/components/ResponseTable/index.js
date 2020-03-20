import React, { useEffect } from "react";
import { Table } from "./style";

function ResponseTable(props) {
  useEffect(() => {

  })

  function fetchOption() {
    // if (props.obj.rows instanceof Array) {
    //   return rows.map((object, i) => {
    //     return <ResponseRow obj={object} key={i} />;
    //   });
    // }
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
