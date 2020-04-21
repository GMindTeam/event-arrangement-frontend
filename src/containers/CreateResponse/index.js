import React, { useState, useEffect } from "react";
import ResponseTable from "../../components/ResponseTable";
import { Container } from "./style";
import Button from '../../components/Button';
import Title from '../../components/Title';
import { Form, Field, Formik } from "formik";
import * as Yup from 'yup'
function CreateResponse(props) {
  const [options, setOptions] = useState([]);
  const [isNotResponse, setIsNotResponse] = useState(false);
  useEffect(() => {
    if (props.type === "edit") {
      var arr = [...props.response.response_detail_list];
      var list = []
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].response_answer === "4") setIsNotResponse(true)
        var obj = {
          "optionid": arr[i].response_optionid,
          "answer": arr[i].response_answer
        }
        list.push(obj)
      }
      setOptions(list);
    }
    return () => {
    }
  }, [props.response, props.type])
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Tên người phản hồi không được bỏ trống. Vui lòng nhập tên người phản hồi!'),
    comment: Yup.string()
      .required('Bình luận không được bỏ trống. Vui lòng nhập bình luận!'),
    isChecked: Yup.string()
      .required("Các lựa chọn phải được vote đầy đủ!")
  });

  return (

    <Container>
      <div className="modal-content">

        <span className="close" onClick={() => {
          props.closeModal()
        }}>&times;</span>
        <Title>
          {props.type === "create" ? <h3>Tạo phản hồi</h3> : <h3>Chỉnh sửa phản hồi</h3>}
        </Title>
        <Formik
          initialValues={{
            username: (props.type === "create") ? "" : props.response.response_nameUser,
            comment: (props.type === "create") ? "" : props.response.response_comment,
            response_detail_list: (props.type === "create") ? [] : props.response.response_detail_list,
            titles: props.titles,
            type: props.type,
            isChecked: ((props.type === "create") || isNotResponse === true) ? "" : "ok"
          }}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            if (values.username !== "" && values.comment !== "" && values.isChecked === "ok") {
              const requestBody = {
                "nameuser": values.username,
                "eventid": props.eventID,
                "comment": values.comment,
                "responsedetail": []
              };
              options.forEach(obj => {
                requestBody.responsedetail.push({
                  "optionid": parseInt(obj.optionid),
                  "answer": parseInt(obj.answer)
                })
              });
              setTimeout(() =>{if(props.type ==='create')
              props.submitHandler(props.type, requestBody, '');
            else props.submitHandler(props.type, requestBody, props.response.response_id);}, 500);
              
              
          }else {
            alert("Don't let input empty");
          }}}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <div className="text-input" error={props.touched.username && !!props.errors.username}>
                <label className="text">Tên người phản hồi</label>
                <Field name="username" render={({ field, form }) => (
                  <input
                    className="content"
                    id="name"
                    placeholder="Nhập tên người phản hồi"
                    {...field}
                  />
                )} />
                {props.touched.username && <label id="warningName">{props.errors.username}</label>}
              </div>
              <div className="table">
                <label className="text">Các lựa chọn</label>
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
              </div>
              <Field name="isChecked" render={({ field, form }) => (
                <div error={props.touched.isChecked && !!props.errors.isChecked}>
                  {props.touched.isChecked && <label id="warningOption"{...field}>{props.errors.isChecked}</label>}
                </div>
              )} />
              <div className="text-input" error={props.touched.comment && !!props.errors.comment}>
                <label className="text">Bình luận</label>
                <Field name="comment" render={({ field, form }) => (
                  <input
                    className="content"
                    id="comment"
                    placeholder="Nhập bình luận"
                    {...field}
                  />
                )} />
                {props.touched.comment && <label id="warningComment">{props.errors.comment}</label>}
              </div>
              <div className="groupButton">
                <Button
                    className="subButton"
                    type="submit"
                    >
                    Gửi
                    </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Container >

  );
}
export default CreateResponse;