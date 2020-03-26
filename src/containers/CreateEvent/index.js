import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom"
import { Button, Container, Title } from "./style";
import { createEvent, editEvent } from './../../api/index';
import { BounceLoader } from "react-spinners";
import { EventContext } from "../../components/EventContext";
import { OptionContext } from "../../components/OptionContext";
import { withFormik, Form, Field } from "formik";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import * as Yup from 'yup'
import { routePath } from '../../config/routes'

function CreateEvent(props) {
  const [event,] = useContext(EventContext);
  const [title, setTitle] = useState(event.name);
  const [description, setDescription] = useState(event.description);
  const [options, setOption] = useContext(OptionContext);
  const [date, setDate] = useState(new Date());
  const [eventID, setEventID] = useState("");
  const [loading, setLoading] = useState(0);

  const [isEditSuccessful, setIsEditSuccessful] = useState(false);
  useEffect(() => {
    if (props.type === "create") {
      setTitle('');
      setDescription('');
      // setOption('');
    }
    return () => {

    }
  }, [props.type])
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
  function handleCreateOrEditButton(e) {
    // post data to server
    var optionSplited = options.split("\n");
    setLoading(1);
    if (
      props.values.title !== "" &&
      props.values.description !== "" &&
      props.values.options !== ""
    ) {
      e.preventDefault();
      const requestBody = {
        "name": title,
        "description": description,
        "options": []
      };
      optionSplited.map((option) => {
        return requestBody.options.push({ "content": option })
      });
      if (props.type === "create") {
        createEvent(requestBody)
          .then(response => {
            setEventID(response.data.id);
            setLoading(2);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      else {
        editEvent(requestBody, event.id)
          .then(() => {
            setIsEditSuccessful(true);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    } else {  //when all the field is not filled it will show the error
      setLoading(0);
      return <Redirect to={""} />
    }
  }
  if (isEditSuccessful === true) {    //when edit successful will redirect to event detail
    return <Redirect to={routePath.eventDetail + event.id} />
  }
  if (loading === 0) {   //when have not click create or edit button yet
    return (
      <Container>
        <Title>
          {props.type === 'create' ? <h3>Create Event</h3> : <h3>Edit Event</h3>}
        </Title>
        <Form>
          <div className="text-input" error={props.touched.title && !!props.errors.title}>
            <label className="text">Event Title</label> <br />
            <Field name="title" render={({ field }) => (
              <input
                className="content"
                id="name"
                placeholder="Enter event title"
                {...field}
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
              />
            )} />
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
                value={description}
                onChange={(e) => { setDescription(e.target.value) }}
              />
            )} />
            {props.touched.description && <label id="warningDescription">{props.errors.description}</label>}
          </div>
          <div className="sub-container">
            <div className="left">
              <div className="text-input" error={props.touched.option && !!props.errors.option}>
                <label className="text">Event Options</label> <br />
                <label className="text"></label>
                <Field name="option" render={({ field }) => (
                  <textarea
                    className="content"
                    id="options"
                    placeholder="Enter event options"
                    {...field}
                    // value={options}
                    // onChange={(e) => { setOption(e.target.value) }}
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
                    setDate();
                  }}
                />
              )} />
              <Button
                className="createButton"
                type="submit"
                onClick={handleCreateOrEditButton}
              >
                {props.type === 'create' ? 'Create Event' : 'Edit Event'}
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    );
  }
  if (loading === 1) {  //when click and senting the request
    return <BounceLoader
      css={"margin:0 auto;margin-top:50px;"}
      size={150}
      color={"#b042b4"}
    />;
  }
  else {    //when server return response.It mean create successful
    return <Redirect to={routePath.eventDetail + eventID} />
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
