import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom"
import { Container } from "./style";
import { createEvent, editEvent } from './../../api/index';
import { BounceLoader } from "react-spinners";
import { EventContext } from "../../components/EventContext";
import { OptionContext } from "../../components/OptionContext";
import { Form, Field, Formik } from "formik";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import * as Yup from 'yup'
import { routePath } from '../../config/routes'
import Button from '../../components/Button'
import Title from '../../components/Title'
import { theme } from '../../config/mainTheme'
function CreateEvent(props) {
  const [event,] = useContext(EventContext);
  const [options,] = useContext(OptionContext);
  const [date, setDate] = useState();
  const [eventID, setEventID] = useState("");
  const [loading, setLoading] = useState(0);
  const [isCreate, setIsCreate] = useState(false);

  const [isEditSuccessful, setIsEditSuccessful] = useState(false);
  useEffect(() => {
    if (props.type === "create") setIsCreate(true);
    else setIsCreate(false);
    return () => {
    }
  }, [props.type])
  function setCookie(cname, cvalue, exdays) {
    const data = JSON.stringify(cvalue);
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + data + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return JSON.parse(c.substring(name.length, c.length));
      }
    }
    return "";
  }
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
      0: "Chủ nhật",
      1: "Thứ 2",
      2: "Thứ 3",
      3: "Thứ 4",
      4: "Thứ 5",
      5: "Thứ 6",
      6: "Thứ 7",

    }
    var day = days[str.getDay()];
    var year = str.getFullYear();
    var month = str.getMonth() + 1;
    var date = str.getDate();
    return (day + ", " + year + "/" + ((month < 10) ? ("0" + month) : month) + "/" + ((date < 10) ? ("0" + date) : date));
  }
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title is required'),
    description: Yup.string()
      .required('Description is required'),
    options: Yup.string()
      .required('Options is required'),
  });

  if (isEditSuccessful === true) {    //when edit successful will redirect to event detail
    return <Redirect to={routePath.eventDetail + event.id} />
  }
  if (loading === 0) {   //when have not click create or edit button yet
    return (

      <Container>
        <Title>
          {isCreate ? <h3>Create Event</h3> : <h3>Edit Event</h3>}
        </Title>
        <Formik
          initialValues={{
            title: (isCreate) ? "" : event.name,
            description: (isCreate) ? "" : event.description,
            options: (isCreate) ? "" : options
          }}
          enableReinitialize={true}
          onSubmit={(values) => {



            var optionSplited = values.options.split("\n");
            setLoading(1);
            if (
              (values.title !== "") &&
              (values.description !== "") &&
              (values.options !== "")
            ) {
              const requestBody = {
                "name": values.title,
                "description": values.description,
                "options": []
              };
              optionSplited.map((option) => {
                if (option !== "")
                  return requestBody.options.push({ "content": option })
                return false;
              });
              if (isCreate) {
                createEvent(requestBody)
                  .then(response => {
                    setEventID(response.data.id);
                    setLoading(2);
                    const eventData = getCookie("eventData");   //get data from cookie
                    if (eventData !== "") {  //kiem tra neu cookie da ton tai
                        var newEventObject = {    //object moi de them vao cookie
                          eventid: response.data.id,
                          name: response.data.name,
                          description: response.data.description
                        };
                        if(eventData.createdEvent instanceof Array)
                        {
                          eventData.createdEvent.push(newEventObject);    
                          setCookie("eventData", eventData, 30);    //push them object va luu vao cookie
                        }
                    }
                    else {    //neu cookie chua ton tai thi tao cookie moi
                      var array = {
                        createdEvent: [
                          {
                            eventid: response.data.id,
                            name: response.data.name,
                            description: response.data.description
                          }
                        ],
                        responsedEvent: [
                        ]
                      }
                      setCookie("eventData", array, 30);
                    }

                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }
              else {
                editEvent(requestBody, event.id)
                  .then(() => {
                    setIsEditSuccessful(true);
                    const eventData = getCookie("eventData");   //get data from cookie
                    if (eventData !== "") {  //kiem tra neu cookie da ton tai
                        if(eventData.createdEvent instanceof Array)
                        {
                          eventData.createdEvent.forEach((createdEvent,index) => {   //check coi event da co trong creaedEvent trong cookie chua
                            if (createdEvent.eventid === event.id) {
                              eventData.createdEvent[index].name = values.title;
                              eventData.createdEvent[index].description = values.description;
                            }
                          })
                          setCookie("eventData", eventData, 30);    //push them object va luu vao cookie
                        }
                        if(eventData.responsedEvent instanceof Array)
                        {
                          eventData.responsedEvent.forEach((responsedEvent,index) => {   //check coi event da co trong responsed event trong cookie chua
                            if (responsedEvent.eventid === event.id) {
                              eventData.responsedEvent[index].name = values.title;
                              eventData.responsedEvent[index].description = values.description;
                            }
                          })
                          setCookie("eventData", eventData, 30);    //push them object va luu vao cookie
                        }
                        
                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }
            } else {  //when all the field is not filled it will show the error
              setLoading(0);
              return <Redirect to={""} />
            }
          }}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <div className="text-input" error={props.touched.title && !!props.errors.title}>
                <label className="text">Event Title</label> <br />
                <Field name="title" render={({ field }) => (
                  <input
                    className="content"
                    id="name"
                    placeholder="Enter event title"
                    {...field}
                  />)} />
                {props.touched.title && <label id="warningName">{props.errors.title}</label>}
              </div>
              <div className="text-input" error={props.touched.description && !!props.errors.description}>
                <label className="text">Event Description</label> <br />
                <Field name="description" render={({ field }) => (
                  <input
                    className="content"
                    id="description"
                    placeholder="Enter event description"
                    {...field}
                  />)} />
                {props.touched.description && <label id="warningDescription">{props.errors.description}</label>}
              </div>
              <div className="sub">
                <div className="text-input" error={props.touched.options && !!props.errors.options}>
                  <label className="text">Event Options</label> <br />
                  <label className="text"></label>
                  <Field name="options" render={({ field, form }) => (
                    <textarea
                      className="content"
                      id="options"
                      placeholder="Enter event options"
                      {...field}
                    />)} />
                  {props.touched.options && <label id="warningOptions">{props.errors.options}</label>}
                </div>
                <div className="calendar">
                  <Field name="datetime" render={({ field, form }) => (
                    <DateTimeRangePicker
                      {...field}
                      onChange={date => setDate(date)}
                      value={date} onCalendarClose={() => {
                        var text = date + "";
                        var oldText = props.values.options.trim("\n");
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
                            text = new Date(numbersd);
                            var newtext = formatDate(text);
                            oldText = oldText + "\n" + newtext + " 18:00~";
                          }
                          else {
                            while (numbersd <= numbered) {
                              text = new Date(numbersd);
                              newtext = formatDate(text);
                              oldText = oldText + "\n" + newtext + " 18:00~";
                              numbersd += 86400000;
                            }
                          }
                        }
                        form.setFieldValue("options", oldText.trim("\n"));
                        setDate();
                      }} />)} />

                </div>
              </div>
              <Button className="createButton" type="submit" >
                {isCreate ? 'Create Event' : 'Edit Event'}
              </Button>
            </Form>)}
        </Formik>
      </Container>
    );
  }
  if (loading === 1) {  //when click and senting the request
    return <BounceLoader
      css={"margin:0 auto;margin-top:50px;"}
      size={150}
      color={theme.mainColor1}
    />;
  }
  else {    //when server return response.It mean create successful
    return <Redirect to={routePath.eventDetail + eventID} />
  }
}

export default CreateEvent;
