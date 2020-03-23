import React, { useState, useEffect } from "react";
import EventRow from "../../components/EventRow";
import { Table } from "./style";

function EventTable(props) {
  const [responselist,setResponseList] = useState([]);
  useEffect(() => {
    if(props.obj.responselist instanceof Array)
    {
      setResponseList(props.obj.responselist[0]);
    }
  })

  function fetchRows() {
    if (responselist instanceof Array) {
      return responselist.map((object, i) => {
        return <EventRow handler={props.handler} key={i} obj={object} eventid={props.obj.id} />;
      });
    }
  }

  function fetchTitle() {
    if (props.titles instanceof Array) {
      return props.titles.map((object) => {
        return <th> {object.content}</th>;
      });
    }
  }

  return (
    <div>
      <Table>
        <tr>
          <th>Name</th>
          {fetchTitle()}
          <th>Comment</th>
          <th className="ActionHeader">Actions</th>
        </tr>
        {fetchRows()}
      </Table>
    </div>
  );
}

export default EventTable;
