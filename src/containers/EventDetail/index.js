import React, { useEffect, useState, useContext } from "react";
import EventTable from "../../components/EventTable";
import { Link } from "react-router-dom";
import { Table } from "../../components/EventTable/style";
import { BounceLoader } from "react-spinners";
import { Container, CopyLinkStyle } from "./style";
import Notification from "../../components/Notification"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CreateResponse from "../CreateResponse";
import { getEventDetail, getOptions, deleteResponse } from "../../api";
import { EventContext } from "../../components/EventContext";
import { OptionContext } from "../../components/OptionContext";
import { appPath } from '../../config/constants';
import { routePath } from '../../config/routes';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { theme } from '../../config/mainTheme'
function EventDetail(props) {
  const [event, setEvent] = useContext(EventContext);
  const [loading, setLoading] = useState(true);
  const [, setOption] = useContext(OptionContext);
  const [eventCopy, setEventCopy] = useState("");
  const [countDown, setCountDown] = useState(0);
  const [isCreating, setIsCreating] = useState(false); // thong bao la dang create/edit response
  const [isDone, setIsDone] = useState(false);  //thong bao la response da duoc create/edit
  const [isOpentEditResponse, setIsOpentEditResponse] = useState(false); //check neu enable modal edit response
  const [isOpenCreateResponse, setIsOpenCreateResponse] = useState(false);//check neu enable modal create response
  const [countResponse, setCountResponse] = useState([]); //dem so response
  const [count, setCount] = useState([]);
  const [titles, setTitle] = useState("");
  const [responseNeedToEdit, setResponseNeedToEdit] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    countDown >= 0 && setTimeout(() => setCountDown(countDown - 1), 1000); //moi giay thi giam count down di 1
    countDown < 0 && setCountDown(10);  // reinit count down = 10
    countDown === 0 && setEvent(eventCopy); //countdown = 0 thi update table voi gia tri event copy
    countDown === 10 && (function () {    //countdown = 10 thi goi api de luu gia tri eventcopy
      getEventDetail(props.match.params.eventID)
        .then(response => {
          setEventCopy(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    })();
  }, [countDown]);


  useEffect(() => {
    getEventDetail(props.match.params.eventID)
      .then(response => {
        setEvent(response.data);
        setEventCopy(response.data);
        setLoading(false);
        setCountResponse(response.data.responselist.length);
      })
      .catch(function (error) {
        console.log(error);
      });
    const requestBody = {
      "eventid": props.match.params.eventID,
    };
    getOptions(requestBody)
      .then(response => {
        setTitle(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [props.match.params.eventID]);

  useEffect(() => {
    var arr = [];
    if (titles instanceof Array) {
      titles.forEach((title, index) => {
        if (event.responselist instanceof Array) {
          event.responselist.forEach(response => {
            if (response.response_detail_list instanceof Array) {
              const answer = response.response_detail_list[index].response_answer;
              return arr.push(answer);
            }
          });
        }
      });
      setCount(arr);
    }

  }, [titles,event.responselist])
  function handleEditResponse(response) {   //xu ly khi click button edit
    if (isOpenCreateResponse) setIsOpenCreateResponse(false);
    setIsOpentEditResponse(true);
    setResponseNeedToEdit(response);
  }
  function handleDeleteResponse(response) {  //xu ly khi click button delete
    setIsCreating(true);
    deleteResponse('', response)
      .catch(function (error) {
        console.log(error);
      });
    setIsCreating(true);
    getEventDetail(props.match.params.eventID)
      .then(response => {
        setCountResponse(response.data.responselist.length);
        setEvent(response.data);
        setEventCopy(response.data);
        setIsCreating(false);
        setIsDone(true);
        setTimeout(() => {
          setIsDone(false);
        }, 2000);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function closeModal() {  //xu ly khi click button close cua modal
    setIsOpenCreateResponse(false);
    setIsOpentEditResponse(false);
  }
  function submitHandler() {  //xu ly khi click button submit trong create response
    setIsOpenCreateResponse(false);
    setIsOpentEditResponse(false);
    setIsCreating(true);
    getEventDetail(props.match.params.eventID)
      .then(response => {
        setCountResponse(response.data.responselist.length);
        setEvent(response.data);
        setEventCopy(response.data);
        setIsCreating(false);
        setIsDone(true);
        setTimeout(() => {
          setIsDone(false);
        }, 2000);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function handleEditEvent() {  //xu ly khi click button Edit Event
    let titlesTemp = [...titles];
    let OptionArr = '';
    titlesTemp.forEach((singleTitle) => {
      OptionArr += singleTitle.content + '\n';
    });
    setOption(OptionArr);
  }
  function handleCreateResponse() {  //xu ly khi click button Create Response
    if (isOpentEditResponse) setIsOpentEditResponse(false);
    setIsOpenCreateResponse(true);
  }
  function fetchYes() {   
    if (titles instanceof Array) {
      return titles.map((title, index) => {
        var counts = {};
        count.slice(index * countResponse, (index + 1) * countResponse).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
        return <th> {!isNaN(counts[1]) ? counts[1] : 0}</th>;
      })
    }
  }
  function fetchNo() {
    if (titles instanceof Array) {
      return titles.map((title, index) => {
        var counts = {};
        count.slice(index * countResponse, (index + 1) * countResponse).forEach((x) => { counts[x] = (counts[x] || 0) + 1; });
        return <th> {!isNaN(counts[2]) ? counts[2] : 0}</th>;
      })
    }
  }
  function fetchThinking() {
    if (titles instanceof Array) {
      return titles.map((title, index) => {
        var counts = {};
        count.slice(index * countResponse, (index + 1) * countResponse).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
        return <th> {!isNaN(counts[3]) ? counts[3] : 0}</th>;
      })
    }
  }
  function fetchNotResponseYet() {
    if (titles instanceof Array) {
      return titles.map((title, index) => {
        var counts = {};
        count.slice(index * countResponse, (index + 1) * countResponse).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
        return <th> {!isNaN(counts[4]) ? counts[4] : 0}</th>;
      })
    }
  }
  function fetchTitle() {
    if (titles instanceof Array) {
      return titles.map((title) => {
        return <th> {title.content}</th>;
      });
    }
  }

  if (loading) {
    return <BounceLoader
      css={"margin:0 auto;margin-top:50px;"}
      size={150}
      color={theme.mainColor1}
    />;
  }
  return (
    <div>
      {isCreating ? <Notification type='loading' message="Đang cập nhật lại bảng..."></Notification> : ''}
      {isDone ? <Notification type='done'message="Bảng đã được cập nhật..."></Notification> : ''}
      <Container>
        <Title>
          <h3>Event Detail</h3>
        </Title>

        <CopyLinkStyle>
          <div className="copy-link-container" >
            <div className="copy-link-inner">
              <input value={appPath.domain + props.match.params.eventID}
                />
              <CopyToClipboard text={appPath.domain + props.match.params.eventID}
                onCopy={() => setCopied(true)}>
                <button >{copied ? "copied" : "copy"}</button>
              </CopyToClipboard>
            </div>
          </div>
        </CopyLinkStyle>

        <div>
          <h2 className="eventName">{event.name}</h2>
        </div>
        <div>
          <p className="eventDescription">{event.description}</p>
        </div>
        <div className="table">
          <div className="text">Statistic</div>
          <div>

            <Table>
              <tr>
                <th>Name</th>
                {fetchTitle()}
              </tr>
              <tr>
                <th>Yes</th>
                {fetchYes()}
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>No</th>
                {fetchNo()}
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Thinking</th>
                {fetchThinking()}
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Not Response Yet</th>
                {fetchNotResponseYet()}
                <th></th>
                <th></th>
              </tr>

            </Table>

          </div>
        </div>
        <div className="table">
          <div className="text">Options</div>
          <EventTable handlerEdit={handleEditResponse} handlerDelete={handleDeleteResponse} event={event} titles={titles} />

        </div>
        <div className="countDown">
          {isCreating ? " " : <h3>This table will refresh in {countDown} second!</h3>}

        </div>
        <div className="groupButton">
          <Button onClick={handleCreateResponse}>Create Response</Button>
          <Link to={routePath.editEvent + event.id}>
            <Button type="submit" onClick={handleEditEvent}>Edit Event</Button>
          </Link>
        </div>
      </Container >
      <div>
        {isOpenCreateResponse ? <CreateResponse type="create" submitHandler={submitHandler} titles={titles} closeModal={closeModal} eventID={event.id} eventName={event.name} eventDescription={event.description}></CreateResponse> : ""}
        {isOpentEditResponse ? <CreateResponse type="edit" submitHandler={submitHandler} titles={titles} closeModal={closeModal} eventID={event.id} eventName={event.name} eventDescription={event.description} response={responseNeedToEdit}></CreateResponse> : ""}
      </div>
    </div>
  );
}


export default EventDetail;
