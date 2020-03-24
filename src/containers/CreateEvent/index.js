import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom"
import DateTimePicker from "react-datetime-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Title } from "./style";
import { BounceLoader } from "react-spinners";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup'
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";

function CreateEvent(props) {
  const [date, setDate] = useState();
  const [eventID, setEventID] = useState("");
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [options, setOption] = useState([]);

  function handleCalendar() {
    var text = "";
    text = props.values.option;
    if (date !== undefined) {
      text = text + date + "\n";
    }
    console.log(text);
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
      console.log(requestBody);
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
      alert("Don't let inputs empty");
    }
  }
  if (eventID === '') {
    if (loading === false)
      return (
        <Container>
          <Title>
            <h3>Create Event</h3>
          </Title>
          <Form>
            <div className="text-input" error={props.touched.title && !!props.errors.title}>
              <label className="text" css={"font-weight: bold;"}>Title</label> <br />
              <Field name="title" render={({ field }) => (
                <input
                  className="content"
                  id="name"
                  placeholder="Type title of event"
                  {...field}
                />
              )} />
              {props.touched.title && <label id="warningName">{props.errors.title}</label>}
            </div>
            <div className="text-input" error={props.touched.description && !!props.errors.description}>
              <label className="text">Description</label>
              <Field name="description" render={({ field }) => (
                <input
                  className="content"
                  id="description"
                  placeholder="Type description"
                  {...field}
                />
              )} />
              {props.touched.description && <label id="warningDescription">{props.errors.description}</label>}
            </div>
            <div className="sub-container">
              <div className="left">
                <div className="text-input" error={props.touched.option && !!props.errors.option}>
                  <label className="text">Options</label>
                  <Field name="option" render={({ field }) => (
                    <textarea
                      className="content"
                      id="options"
                      placeholder="Type options"
                      {...field}
                    />
                  )} />
                  {props.touched.option && <label id="warningOptions">{props.errors.option}</label>}
                </div>
              </div>
              <div className="right">
                <DateTimeRangePicker
                  onChange={date => setDate(date)}
                  value={date}
                  onCalendarClose={handleCalendar}
                />
              </div>
            </div>
            <Button
              className="createButton"
              type="submit"
              onClick={handleCreateButton}
            >
              Create Event
          </Button>
          </Form>
        </Container>
      );
    else {
      return <BounceLoader
        css={"margin:0 auto;margin-top:50px;"}
        size={150}
        color={"#b042b4"}
      />;
    }
  }

  else {
    return <Redirect to={"/event/" + eventID} />
  }
}
const FormikForm = withFormik({
  mapPropsToValues() {
    return {
      title: "",
      description: "",
      option: ""
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .required('Title is required'),
    description: Yup.string()
      .required('Description is required'),
    option: Yup.string()
      .required('Option is required')
  }),
})(CreateEvent);

export default FormikForm;
