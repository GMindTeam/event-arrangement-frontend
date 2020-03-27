import React, { useState, useEffect } from "react";
import ResponseTable from "../../components/ResponseTable";
import { Container, Button, Title } from "./style";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup'
import { createResponse, editResponse } from "../../api";
function CreateResponse(props) {
  const [name, setName] = useState('');
  const [options, setOptions] = useState([]);
  const [comment, setComment] = useState('');
  useEffect(() => {
    if (props.type === "edit") {
      setName(props.response.response_nameUser);
      setComment(props.response.response_comment);
    }
    return () => {

    }
  }, [props.response])
  function handleSubmitButton(e) {
    if (props.values.username !== "" && props.values.comment !== "" && props.type === "create" && props.values.checked !== "") {
      e.preventDefault();
      const requestBody = {
        "nameuser": props.values.username,
        "eventid": props.eventID,
        "comment": props.values.comment,
        "responsedetail": []
      };
      options.map((obj) => {
        return requestBody.responsedetail.push({
          "optionid": parseInt(obj.optionid),
          "answer": parseInt(obj.answer)
        })
      });
      createResponse(requestBody)
        .then(response => {

        })
        .catch(function (error) {
          console.log(error);
        })

    } else if (name !== "" && comment !== "" && props.type === "edit") {
      e.preventDefault();
      const requestBody = {
        "nameuser": name,
        "eventid": props.eventID,
        "comment": comment,
        "responsedetail": []
      };
      options.map((obj) => {
        return requestBody.responsedetail.push({
          "optionid": parseInt(obj.optionid),
          "answer": parseInt(obj.answer)
        })
      });
      editResponse(requestBody, props.response.response_id)
        .then(response => {

        })
        .catch(function (error) {
          console.log(error);
        })
    }
    else {
      alert("Don't let input empty");
    }
  }
  if (props.type === "create") {
    return (
      <Container>
        <Title>
          <h3>Create Response</h3>
        </Title>
        <div className="text-input" error={props.touched.username && !!props.errors.username}>
          <label className="text">Your Name</label>
          <Field name="username" render={({ field, form }) => (
            <input
              className="content"
              id="name"
              placeholder="Enter your name"
              {...field}
            />
          )} />
          {props.touched.username && <label>{props.errors.username}</label>}
          <label id="warningName">Please type your name</label>
        </div>
        <div className="table" >
          <label className="text" >Options</label>
          <ResponseTable
            titles={props.titles}
            handleChangeResponse={(responselist) => {
              setOptions(responselist);
            }} />
          <label id="warningOption">Please type options</label>
        </div>
        <div className="text-input" error={props.touched.comment && !!props.errors.comment}>
          <label className="text">Comment</label>
          <Field name="comment" render={({ field, form }) => (
            <input
              className="content"
              id="comment"
              placeholder="Enter your comment"
              {...field}
            />
          )} />
          {props.touched.comment && <label>{props.errors.comment}</label>}
          <label id="warningComment">Please type comment</label>
        </div>
        <div className="groupButton">
          <Button
            className="subButton"
            type="submit"
            onClick={handleSubmitButton}
          >
            Submit
            </Button>
        </div>
      </Container>
    );
  }
  if (props.type === "edit") {
    return (
      <Container>
        <Title>
          <h3>Edit Response</h3>
        </Title>
        <div className="text-input" error={props.touched.username && !!props.errors.username}>
          <label className="text">Your Name</label>
          <Field name="username" render={({ field, form }) => (
            <input
              className="content"
              id="name"
              placeholder="Enter your name"
              {...field}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                form.setFieldValue("username", e.target.value);
              }}
            />
          )} />
          {props.touched.username && <label>{props.errors.username}</label>}
          <label id="warningName">Please type your name</label>
        </div>
        <div className="table">
          <label className="text">Options</label>
          <ResponseTable
            type="edit"
            titles={props.titles}
            responselist={props.response.response_detail_list}
            handleChangeResponse={(responselist) => {
              setOptions(responselist);
            }} />
          <label id="warningOption">Please type options</label>
        </div>
        <div className="text-input" error={props.touched.comment && !!props.errors.comment}>
          <label className="text">Comment</label>
          <Field name="comment" render={({ field, form }) => (
            <input
              className="content"
              id="comment"
              placeholder="Enter your comment"
              {...field}
              value={comment}
              onChange={(e) => {
                setComment(e.target.value)
                form.setFieldValue("comment", e.target.value)
              }}
            />
          )} />
          {props.touched.comment && <label>{props.errors.comment}</label>}
          <label id="warningComment">Please type comment</label>
        </div>
        <div className="groupButton">
          <Button
            className="subButton"
            type="submit"
            onClick={handleSubmitButton}
          >
            Submit
            </Button>
        </div>
      </Container>
    );
  }

}
const FormikForm = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      comment: "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required('Your name is required'),
    comment: Yup.string()
      .required('Comment is required'),
  }),
})(CreateResponse);

export default FormikForm;