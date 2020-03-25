import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Title } from "./style";
import { createEvent } from './../../api/index';
import { BounceLoader } from "react-spinners";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup'
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";


function CreateEvent(props) {
  const [date, setDate] = useState();
  const [eventID, setEventID] = useState("");
  const [loading, setLoading] = useState(false);

  function convert(str) {
    var mnths = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12"
    }
    str = str.split(" ");
    var newDate = mnths[str[1]] + "/" + str[2] + "/" + str[3];
    return (new Date(newDate).getTime())
  }
  function formatDate(str) {
    var days = {
      1: "Thứ 2",
      2: "Thứ 3",
      3: "Thứ 4",
      4: "Thứ 5",
      5: "Thứ 6",
      6: "Thứ 7",
      7: "Chủ nhật"
    }
    var day = days[str.getDay()];
    var year = str.getFullYear();
    var month = str.getMonth() + 1;
    var date = str.getDate();
    return (day + ", " + year + "/" + ((month < 10) ? ("0" + month) : month) + "/" + ((date < 10) ? ("0" + date) : date));
  }
  function handleCreateButton(e) {
    // post data to server
    var options = props.values.option.split("\n");
    setLoading(true);
    if (
      props.values.title !== "" &&
      props.values.description !== "" &&
      props.values.option !== ""
    ) {
      e.preventDefault();
      const requestBody = {
        "name": props.values.title,
        "description": props.values.description,
        "options": []
      };
      options.map((obj) => {
        return requestBody.options.push({ "content": obj })
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
                <Field name="datetime" render={({ field, form }) => (
                  <DateTimeRangePicker
                    {...field}
                    onChange={date => setDate(date)}
                    value={date}
                    onCalendarClose={() => {
                      var text = date + "";
                      var oldText = props.values.option;
                      oldText = oldText.trim("\n");
                      var listDate = text.split(",");
                      var startDate = listDate[0];
                      startDate = startDate.replace(",", " ");
                      var numbersd = convert(startDate);
                      var endDate = listDate[1];
                      var numbered = 0;
                      if (date !== undefined) {
                        if (endDate !== undefined) {
                          endDate = endDate.replace(",", " ");
                          numbered = convert(endDate);
                        }
                        if (endDate === undefined) {
                          var text = new Date(numbersd);
                          var newtext = formatDate(text);
                          oldText = oldText + "\n" + newtext + " 18:00~";
                        } else {
                          while (numbersd <= numbered) {
                            var text = new Date(numbersd);
                            var newtext = formatDate(text);
                            oldText = oldText + "\n" + newtext + " 18:00~";
                            numbersd += 86400000;
                          }
                        }
                      }
                      form.setFieldValue("option", oldText.trim("\n"));
                      
                    }}
                  />
                )} />
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
