import React, { useState, useEffect } from "react";
import EventRow from "../EventRow";
import { Table } from "./style";

function EventTable(props) {
  const [responselist, setResponseList] = useState([]);
  const [countResponse, setCountResponse] = useState([]);
  const [count, setCount] = useState([]);
  // const [count, setCountYes] = useState([]);
  useEffect(() => {
    if (props.event.responselist instanceof Array) {
      setResponseList(props.event.responselist);
      setCountResponse(props.event.responselist.length);
    }
  }, [props.event.responselist])
  useEffect(() => {
    var arr = [];
    props.titles.map((title, index) => {

      props.event.responselist.map((response) => {
        const answer = response.response_detail_list[index].response_answer;
        arr.push(answer)
      });
    });
    setCount(arr);
  }, [])




  function fetchRows() {
    if (responselist instanceof Array) {
      return responselist.map((response, i) => {
        return <EventRow handlerEdit={props.handlerEdit} handlerDelete={props.handlerDelete} response={response} index={i} eventid={props.event.id} />;
      });
    }
  }
  function fetchYes() {
    
    return props.titles.map((title, index) => {
      var counts = {};
      count.slice(index*countResponse,(index+1)*countResponse).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
      return <th> {!isNaN(counts[1])? counts[1] : 0}</th>;
    })
  }
  function fetchNo() {
    return props.titles.map((title, index) => {
      var counts = {};
      count.slice(index*countResponse,(index+1)*countResponse).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
      return <th> {!isNaN(counts[2])? counts[2] : 0}</th>;
    })
  }
  function fetchThinking() {
    return props.titles.map((title, index) => {
      var counts = {};
      count.slice(index*countResponse,(index+1)*countResponse).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
      return <th> {!isNaN(counts[3])? counts[3] : 0}</th>;
    })
  }
  function fetchNotResponseYet() {
    return props.titles.map((title, index) => {
      var counts = {};
      count.slice(index*countResponse,(index+1)*countResponse).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
      return <th> {!isNaN(counts[4])? counts[4] : 0}</th>;
    })
  }
  // function deleteRow(key) {
  //   var arr = [...responselist];
  //   arr.splice(key, 1);
  //   setResponseList(arr);
  //   return props.handleChange(arr);
  // }
  function fetchTitle() {
    if (props.titles instanceof Array) {
      return props.titles.map((title) => {
        return <th> {title.content}</th>;
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
        <tr>
          <th>Yes</th>
          {fetchYes()}
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>No</th>
          {fetchNo()}
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>Thinking</th>
          {fetchThinking()}
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>Not Response Yet</th>
          {fetchNotResponseYet()}
          <th></th>
          <th></th>
        </tr>

      </Table>
    </div>
  );
}

export default EventTable;
