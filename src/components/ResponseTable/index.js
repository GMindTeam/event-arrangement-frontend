import React, { useEffect } from "react";
import { Table } from "./style";
import ResponseRow from "../ResponseRow"

function ResponseTable(props) {
  useEffect(() => {
    console.log(props.titles);
    return () => {
      
    }
  }, [])
  function fetchOption() {
    let titles = props.titles;
    if (titles instanceof Array) {
      return titles.map((title, i) => {
        return <ResponseRow title={title} key={i} />;
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
