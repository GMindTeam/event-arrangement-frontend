import React, { useState, useEffect } from "react";
import ResponseTable from "../../components/ResponseTable";
import { Container } from "./style";
import Button from '../../components/Button';
import Title from '../../components/Title';
import { Form, Field, Formik } from "formik";
import * as Yup from 'yup'
import { createResponse, editResponse } from "../../api";
function CreateResponse(props) {
  const [options, setOptions] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  useEffect(() => {
    return () => {
    }
  }, [props.response, props.type])
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Your name is required'),
    comment: Yup.string()
      .required('Comment is required'),
    isChecked: Yup.string()
      .required("At least one answer of each row is selected")
  });

  return (
    <Container>
      <Title>
        {props.type === "create" ? <h3>Create Response</h3> : <h3>Edit Response</h3>}
      </Title>
      <Formik
        initialValues={{
          username: (props.type === "create") ? "" : props.response.response_nameUser,
          comment: (props.type === "create") ? "" : props.response.response_comment,
          response_detail_list: (props.type === "create") ? [] : props.response.response_detail_list,
          titles: props.titles,
          type: props.type,
          isChecked: ""
        }}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setIsCreating(true);
          console.log(options);
          if (values.username !== "" && values.comment !== "" && values.isChecked === "ok") {
            const requestBody = {
              "nameuser": values.username,
              "eventid": props.eventID,
              "comment": values.comment,
              "responsedetail": []
            };
            options.map((obj) => {
              return requestBody.responsedetail.push({
                "optionid": parseInt(obj.optionid),
                "answer": parseInt(obj.answer)
              })
            });
            if (props.type === "create") {
              createResponse(requestBody)
                .then(response => {
                  setIsCreating(false);
                  props.submitHandler();
                })
                .catch(function (error) {
                  console.log(error);
                })
            } else {
              editResponse(requestBody, props.response.response_id)
                .then(response => {
                  setIsCreating(false);
                  props.submitHandler();
                })
                .catch(function (error) {
                  console.log(error);
                })
            }
          } else {
            alert("Don't let input empty");
          }
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
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
              {props.touched.username && <label id="warningName">{props.errors.username}</label>}
            </div>
            <div className="table">
              <label className="text">Options</label>
              <Field render={({ field, form }) => (
                <ResponseTable name="response_detail_list"
                  titles={props.values.titles}
                  type={props.values.type}
                  responselist={props.values.response_detail_list}
                  handleChangeResponse={(responselist, isChecked) => {
                    setOptions(responselist);
                    form.setFieldTouched("isChecked", true)
                    if (isChecked === false) {
                      form.setFieldValue("isChecked", "")
                    }
                    else {
                      form.setFieldValue("isChecked", "ok")
                    }
                  }} />
              )} />
              <Field name="isChecked" render={({ field, form }) => (
                <div error={props.touched.isChecked && !!props.errors.isChecked}>
                  {props.touched.isChecked && <label id="warningOption"{...field}>{props.errors.isChecked}</label>}
                </div>
              )} />
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
              {props.touched.comment && <label id="warningComment">{props.errors.comment}</label>}
            </div>
            <div className="groupButton">
              {isCreating ? <div><Button
                className="subButton"
                type="submit"
                disabled
              >
                Submit
            </Button> <label id="loading">Loading...</label></div> : <Button
                  className="subButton"
                  type="submit"
                >
                  Submit
            </Button>}
            </div>
          </Form>
        )}
      </Formik>
    </Container >
  );
}
export default CreateResponse;