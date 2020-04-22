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
import { convertToTimestamp, formatDate } from "../../utils/commonHelper";
import OptionList from "../../components/OptionList"
function CreateEvent(props) {
  const [event,] = useContext(EventContext);
  const [options,] = useContext(OptionContext);
  const [date, setDate] = useState();
  const [eventID, setEventID] = useState("");
  const [loading, setLoading] = useState(0);
  const [isCreate, setIsCreate] = useState(false);
  const [isDistinct, setIsDistinct] = useState(true);
  const [isEditSuccessful, setIsEditSuccessful] = useState(false);
  const [isOk, setIsOk] = useState(false)
  const [textState, setTextState] = useState(0)
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
  useEffect(() => {
    if (props.type === "create") {
      setIsCreate(true);
    }
    else {
      setIsOk(true);
      setIsCreate(false);
    }
    return () => {
    }
  }, [props.type])
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Tiêu đề không được bỏ trống. Vui lòng nhập tiêu đề!'),
    description: Yup.string()
      .required('Mô tả không được bỏ trống. Vui lòng nhập mô tả!'),
    options: Yup.string()
      .required('Lựa chọn không được bỏ trống. Vui lòng nhập lựa chọn!'),
  });

  if (isEditSuccessful === true) {    //when edit successful will redirect to event detail
    return <Redirect to={routePath.eventDetail + event.id} />
  }
  if (loading === 0) {   //when have not click create or edit button yet
    return (

      <Container>
        <Title>
          {isCreate ? <h1>Tạo sự kiện</h1> : <h1>Chỉnh sửa sự kiện</h1>}
        </Title>
        <Formik
          initialValues={{
            title: (isCreate) ? "" : event.name,
            description: (isCreate) ? "" : event.description,
            options: (isCreate) ? "" : options,
            type: (isCreate) ? "create" : "edit",
            content: "",
            distinct: ""
          }}
          enableReinitialize={true}
          onSubmit={(values) => {
            var optionSplited = values.options.split("\n");
            setLoading(1);
            if (
              (values.title !== "") &&
              (values.description !== "") &&
              (values.options !== "" && isOk)
            ) {
              const requestBody = {
                "name": values.title,
                "description": values.description,
                "options": []
              };
              optionSplited.forEach((option) => {
                if (option !== "")
                   requestBody.options.push({ "content": option })
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
                              eventData.createdEvent[index].name = values.title; //doi lai event name trong cookie
                              eventData.createdEvent[index].description = values.description; //doi lai event description trong cookie
                            }
                          })
                          setCookie("eventData", eventData, 30);    //push them object va luu vao cookie
                        }
                        if(eventData.responsedEvent instanceof Array)
                        {
                          eventData.responsedEvent.forEach((responsedEvent,index) => {   //check coi event da co trong responsed event trong cookie chua
                            if (responsedEvent.eventid === event.id) {
                              eventData.responsedEvent[index].name = values.title;      //doi lai event name trong cookie
                              eventData.responsedEvent[index].description = values.description;  //doi lai event description trong cookie
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
                <label className="text">Tiêu đề sự kiện</label> <br />
                <Field name="title" render={({ field }) => (
                  <input
                    className="content"
                    id="name"
                    placeholder="Nhập tiêu đề sự kiện"
                    {...field}
                  />)} />
                {props.touched.title && <label className="warning">{props.errors.title}</label>}
              </div>
              <div className="text-input" error={props.touched.description && !!props.errors.description}>
                <label className="text">Mô tả sự kiện</label> <br />
                <Field name="description" render={({ field }) => (
                  <input
                    className="content"
                    id="description"
                    placeholder="Nhập mô tả sự kiện"
                    {...field}
                  />)} />
                {props.touched.description && <label className="warning">{props.errors.description}</label>}
              </div>
              <div className="sub">
                  <div className="text-input" error={props.touched.options && !!props.errors.options}>
                    <label className="text">Các lựa chọn</label> <br />
                    <label className="text"></label>
                    <Field name="content" render={({ field, form }) => (
                      <input
                        className="content"
                        placeholder="Nhập lựa chọn"
                        {...field}
                        onBlur={(e) => {
                          form.setFieldTouched("options", true);
                          var tmp = e.target.value.trim("\s+").toLowerCase()
                          if (tmp === "") {
                            setIsOk(true);
                          }
                          setIsDistinct(true)
                        }}
                        onKeyDown={(e) => {
                          setIsDistinct(true)
                          if (e.keyCode === 13) {
                            e.preventDefault()
                            var oldText = (String)(props.values.options).trim("\n")
                            var tmp = e.target.value.trim("\s+").toLowerCase()
                            var arr = oldText.toLowerCase().split("\n")
                            if (arr.indexOf(tmp) === -1) {
                              setIsOk(true)
                              form.setFieldValue("options", oldText + "\n" + e.target.value)
                              form.setFieldValue("content", "")
                              setIsDistinct(true)
                            } else if (tmp === "") {
                              setIsOk(true)
                            }
                            else {
                              setIsOk(false)
                              setIsDistinct(false)
                            }
                          }
                        }}
                      />)} />
                    {(props.touched.options) && <label className="warning">{props.errors.options}</label>}
                 <div className="wrapper">
                  <div className="calendar">
                    <Field name="datetime" render={({ field, form }) => (
                      <DateTimeRangePicker
                        onChange={(date) => {
                          setDate(date)
                        }}
                        onBlur={() => {
                          if (!isDistinct) {
                            form.setFieldError("distinct", "This option already exists")
                          }
                        }}
                        value={date}
                        onCalendarClose={() => {
                          form.setFieldTouched("options", true);
                          var text = date + "";
                          var oldText = (String)(props.values.options).trim("\n");
                          var listDate = text.split(",");
                          var startDate = listDate[0];
                          startDate = startDate.replace(",", " ");
                          var numbersd = convertToTimestamp(startDate);
                          var endDate = listDate[1];
                          var numbered = 0;
                          var arr = oldText.split("\n")
                          if (date !== undefined) {
                            if (endDate !== undefined) {
                              endDate = endDate.replace(",", " ");
                              numbered = convertToTimestamp(endDate);
                            }
                            if (endDate === undefined) {
                              text = new Date(numbersd);
                              var newtext = formatDate(text);
                              if (arr.indexOf(newtext + " 18:00~") === -1) {
                                oldText = oldText + "\n" + newtext + " 18:00~";
                                setIsDistinct(true)
                                setIsOk(true)
                              } else {
                                console.log("not distinct")
                                setIsDistinct(false)
                                setIsOk(false)
                              }
                            }
                            else {
                              var check = 0;
                              var count = 0;
                              while (numbersd <= numbered) {
                                text = new Date(numbersd);
                                newtext = formatDate(text);
                                count += 1
                                if (arr.indexOf(newtext + " 18:00~") === -1) {
                                  oldText = oldText + "\n" + newtext + " 18:00~";
                                } else {
                                  check += 1
                                }
                                numbersd += 86400000;
                              }
                              if (count === check) {
                                console.log("distinct")
                                setIsDistinct(false)
                                setIsOk(true)
                              } else {
                                setIsDistinct(true)
                                setIsOk(false)
                              }
                            }
                            form.setFieldValue("options", oldText.trim("\n") + "\n");
                          } else {
                            setIsOk(true)
                          }
                          setDate();
                        }}
                      />)}
                    />
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <Field render={({ field, form }) => (
                  <OptionList
                    name="options"
                    type={props.values.type}
                    options={props.values.options}
                    handleEditOption={(option, index, textState) => {
                      var arr = (String)(props.values.options).trim("\n").split("\n")
                      setTextState(textState)
                      if (textState === 0) {
                        arr[index] = option
                        var str = ""
                        for (var i = 0; i < arr.length; i++) {
                          str += arr[i] + "\n"
                        }
                        form.setFieldValue("options", str.trim("\n"))
                        setIsOk(true)
                        setIsDistinct(true)
                      } else {
                        setIsOk(false)
                        if (textState === 2) {
                          setIsDistinct(false)
                        }
                      }
                    }}
                    handleDeleteOption={(index) => {
                      var arr = (String)(props.values.options).trim("\n").split("\n")
                      var arr1 = arr.splice(index, 1)
                      var str = ""
                      for (var i = 0; i < arr.length; i++) {
                        str += arr[i] + "\n"
                      }
                      form.setFieldValue("options", str.trim("\n"))
                      setIsOk(true)
                      setIsDistinct(true)
                      setTextState(0)
                    }}
                  />
                )} />
                <label className="warning">{!isDistinct ? "Lựa chọn này đã tồn tại. Vui lòng nhập lựa chọn khác!" : ""}</label>
                <label className="warning">{textState === 1 ? "Lựa chọn không được bỏ trống. Vui lòng nhập lựa chọn!" : ""}</label>
              </div>
                <div className="btn">
              <Button className="createButton" type="submit" >
                {isCreate ? 'Tạo sự kiện' : 'Lưu'}
              </Button>
                </div>
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
     //when server return response.It mean create successful
  return <Redirect to={routePath.eventDetail + eventID} />
  
}

export default CreateEvent;