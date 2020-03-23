import React, { useState, useEffect } from "react";
import axios from "axios";
import {Redirect} from "react-router-dom"
import DateTimePicker from "react-datetime-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OptionsTable from "../../components/OptionsTable";
import { Button, Container, Title } from "./style";
import { BounceLoader } from "react-spinners";
function CreateEvent(props) {
  const [date,setDate] = useState(new Date());
  const [eventID,setEventID] = useState("");
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [options, setOption] = useState([]);
  function handleAddButton() {
    var str = date.toString();
    str = str.substring(0, 25);
    var obj = [...options];
    obj.push(str);
    setOption(obj);
  }
  function validateName() {
    if (name === "") {
      document.getElementById("warningName").style.display = "inline";
    } else {
      document.getElementById("warningName").style.display = "none";
    }
  }
  function validateDescription() {
    if (description === "") {
      document.getElementById("warningDescription").style.display = "inline";
    } else {
      document.getElementById("warningDescription").style.display = "none";
    }
  }
  function validateOptions() {
    var obj = [...options];
    if (obj.length === 0) {
      document.getElementById("warningOptions").style.display = "inline";
    } else {
      document.getElementById("warningOptions").style.display = "none";
    }
  }
  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleChangeOptions() { }
  function handleChange(newOptions) {
    setOption(newOptions);
  }
  function handleOnKeyDown(e) {
    if (e.key === "Enter") {
      var obj = [...options];
      var option = document.getElementById("options").value;
      obj.push(option);
      setOption(obj);
    }
  }
  function handleCreateButton(e) {
    // post data to server
    var obj = [...options];
setLoading(true);
    if (
      name !== "" &&
      description !== "" &&
      obj.length !== 0
    ) {
      e.preventDefault();
      let url = "https://miniproject-271309.appspot.com/api/event";
      const requestBody = {
        "name": name,
        "description": description,
        "options": []
      };
      options.map(obj => {
        requestBody.options.push({ "content": obj })
      });
      var qs = require('qs');
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }

      axios.post(url, qs.stringify(requestBody), config)
        .then(response => {
          setEventID(response.data.id);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      validateName();
      validateDescription();
      validateOptions();
      alert("Don't let input empty");
    }
  }
  if(eventID===''){
    if(loading === false ) 
    {
      if(props.type ==="create")
      {
        return (
          <Container>
            <Title>
              <h3>Create Event</h3>
            </Title>
            <div className="text-input">
              <label className="text">Name</label>
              <input
                className="content"
                id="name"
                placeholder="Type name of event"
                required
                onChange={handleChangeName}
                onBlur={validateName}
                value={name}
              />
              <label id="warningName">Please type name of event</label>
            </div>
            <div className="text-input">
              <label className="text">Description</label>
              <input
                className="content"
                id="description"
                placeholder="Type description"
                onChange={handleChangeDescription}
                onBlur={validateDescription}
                value={description}
              />
              <label id="warningDescription">Please type description</label>
            </div>
            <div className="text-input">
              <label className="text">Options</label>
              <input
                className="content"
                id="options"
                placeholder="Type options"
                onChange={handleChangeOptions}
                onBlur={validateOptions}
                onKeyDown={handleOnKeyDown}
                // value={this.state.options}
                required
              />
              <label id="warningOptions">Please type options</label>
    
            </div>
            <OptionsTable
                obj={options}
                handleChange={handleChange}
              />
            <div className="calendar">
              {/* <button className="icon-calendar">this is icon</button> */}
              <DateTimePicker onChange={(date) => setDate(date)} value={date} />
      
              <FontAwesomeIcon
                icon="plus-circle"
                className="addButton"
                type="submit"
                size="2x"
                onClick={handleAddButton}
              />
      
              <br />
            </div>
            <Button
              className="createButton"
              type="submit"
              onClick={handleCreateButton}
            >
              Create Event
              </Button>
          </Container>
        );
      }
      else{
        return (
          <Container>
            <Title>
              <h3>Edit Event</h3>
            </Title>
            <div className="text-input">
              <label className="text">Name</label>
              <input
                className="content"
                id="name"
                placeholder="Type name of event"
                required
                onChange={handleChangeName}
                onBlur={validateName}
                value={name}
              />
              <label id="warningName">Please type name of event</label>
            </div>
            <div className="text-input">
              <label className="text">Description</label>
              <input
                className="content"
                id="description"
                placeholder="Type description"
                onChange={handleChangeDescription}
                onBlur={validateDescription}
                value={description}
              />
              <label id="warningDescription">Please type description</label>
            </div>
            <div className="text-input">
              <label className="text">Options</label>
              <input
                className="content"
                id="options"
                placeholder="Type options"
                onChange={handleChangeOptions}
                onBlur={validateOptions}
                onKeyDown={handleOnKeyDown}
                // value={this.state.options}
                required
              />
              <label id="warningOptions">Please type options</label>
    
            </div>
            <OptionsTable
                obj={options}
                handleChange={handleChange}
              />
            <div className="calendar">
              {/* <button className="icon-calendar">this is icon</button> */}
              <DateTimePicker onChange={(date) => setDate(date)} value={date} />
      
              <FontAwesomeIcon
                icon="plus-circle"
                className="addButton"
                type="submit"
                size="2x"
                onClick={handleAddButton}
              />
      
              <br />
            </div>
            <Button
              className="createButton"
              type="submit"
              onClick={handleCreateButton}
            >
              Edit Event
              </Button>
          </Container>
        );
      }
    }
    
    else{
      return <BounceLoader 
      css={"margin:0 auto;margin-top:50px;"}
      size={150}
      color={"#b042b4"}
      />;
    }
  }
  
  else{
     return <Redirect to={"/event/"+eventID} />
  }
}

export default CreateEvent;
