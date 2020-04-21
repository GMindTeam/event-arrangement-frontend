import React, { useState, useEffect } from "react";
import EventRow from "../EventRow";
import { Table } from "./style";

function EventTable(props) {
  const [responselist, setResponseList] = useState([]);

  // const [count, setCountYes] = useState([]);
  useEffect(() => {
    if (props.event.responselist instanceof Array) {
      setResponseList(props.event.responselist);
      
    }
  }, [props.event.responselist])





  function fetchRows() {
    if (responselist instanceof Array) {
      return responselist.map((response, i) => {
        return <EventRow key={i} handlerEdit={props.handlerEdit} handlerDelete={props.handlerDelete} response={response} index={i} eventid={props.event.id} />;
      });
    }
  }
  function fetchTitle() {
    if (props.titles instanceof Array) {
      return props.titles.map((title, key) => {
        return <th key={key}> {title.content}</th>;
      });
    }
  }

  return (
    <div>
      <Table>
        <table>
          <thead>
        <tr>
          <th>Người phản hồi</th>
          {fetchTitle()}
          <th>Bình luận</th>
          <th className="ActionHeader">Thao tác</th>
        </tr>
        </thead>
        <tbody>
        {fetchRows()}
        </tbody>
        </table>
      </Table>
    </div>
  );
}

export default EventTable;
