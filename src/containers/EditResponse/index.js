import React, { useState, useEffect } from "react";
import axios from "axios";
import ResponseTable from "../../components/ResponseTable";
import { RingLoader } from "react-spinners";

import { Button, Container, Title } from "./style";

function ResponseDetail(props) {


  const [name, setName] = useState('');
  const [comment, setComment] = useState("")
  const [loading, setLoading] = useState(true);
  const [responseDetail, setResponseDetail] = useState([]);
  const [options, setOption] = useState([]);
  useEffect(() => {
    let url =
      "https://miniproject-271309.appspot.com/api/responsedetail?responseid=" +
      props.match.params.responseid;
    axios
      .get(url)
      .then(response => {
        setResponseDetail(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    let url1 =
      "https://miniproject-271309.appspot.com/api/option?eventid=" +
      props.match.params.eventid;
    axios
      .get(url1)
      .then(response => {
        setOption(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => {

    }
  }, []);
  function validateName() {
    if (name === "") {
      document.getElementById("warningName").style.display = "inline";
    } else {
      document.getElementById("warningName").style.display = "none";
    }
  }
  function validateComment() {
    if (comment === "") {
      document.getElementById("warningComment").style.display = "inline";
    } else {
      document.getElementById("warningComment").style.display = "none";
    }
  }
  function handleChangeName(e) {
    setName(e);
  }

  function handleChangeComment(e) {
    setComment(e);
  }
  function handleSaveButton() {
    if (comment !== "" && name !== "") {
      alert("Create response successfully!!!");
    } else {
      validateComment();
      validateName();
      alert("Don't let input empty");
    }
  }

  if (loading) {
    return <RingLoader />;
  }
  return (
    <Container>
      <Title>
        <h3>Edit Response</h3>
      </Title>
      <div className="text-input">
        <label className="text">Your Name</label>
        <input
          className="content"
          id="name"
          onChange={handleChangeName}
          onBlur={validateName}
          value={responseDetail.nameuer}
          required
        />
        <label id="warningName">Please type your name</label>
      </div>
      <div className="table">
        <label className="text">Options</label>
        <ResponseTable
          options={options}
          responsedetail={responseDetail}
        />
      </div>
      <div className="text-input">
        <label className="text">Comment</label>
        <input
          className="content"
          id="comment"
          onChange={handleChangeComment}
          onBlur={validateComment}
          value={comment}
          required
        />
        <label id="warningComment">Please type comment</label>
      </div>
      <div className="groupButton">
        <Button
          className="saveButton"
          type="submit"
          onClick={handleSaveButton}
        >
          Save
          </Button>
      </div>
    </Container>
  );

}

export default ResponseDetail;
