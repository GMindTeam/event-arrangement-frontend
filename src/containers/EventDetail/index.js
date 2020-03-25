import React, { useEffect, useState } from "react";
import EventTable from "../../components/EventTable";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { Container, Button, Title, CopyLinkStyle } from "./style";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CreateResponse from "../CreateResponse";
import { getEventDetail, getOptions } from "../../api";
function EventDetail(props) {
  const [event, setEvent] = useState("");
  const [eventCopy, setEventCopy] = useState("");
  const [countDown, setCountDown] = useState(0);
  const [isOpentEditResponse, setIsOpentEditResponse] = useState(false);

  const [isOpenCreateResponse, setIsOpenCreateResponse] = useState(false);
  const [loading, setLoading] = useState(true);
  const [titles, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    countDown >= 0 && setTimeout(() => setCountDown(countDown - 1), 1000);
    countDown < 0 && setCountDown(10);
    countDown === 0 && setEvent(eventCopy);
    countDown === 10 && (function () {
      getEventDetail(props.match.params.eventID)
        .then(response => {
          setEventCopy(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    })();
  }, [countDown, eventCopy, props.match.params.eventID]);


  useEffect(() => {
    setLink('http://localhost:3000/event/' + props.match.params.eventID);
    getEventDetail(props.match.params.eventID)
      .then(response => {
        setEvent(response.data);
        setLoading(false);

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


  function handleEditResponse() {
    if (isOpenCreateResponse) setIsOpenCreateResponse(false);
    setIsOpentEditResponse(true);
  }

  function handleChange(newResponseList) {

    var newEvent = event;
    newEvent.responselist = newResponseList;
    setEvent(newEvent);
  }
  function handleCopy() {
    if (copied) return 'copied';
    return 'copy';
  }
  function handleCreateResponse() {
    if (isOpentEditResponse) setIsOpentEditResponse(false);
    setIsOpenCreateResponse(true);
  }

  if (loading) {
    return <BounceLoader
      css={"margin:0 auto;margin-top:50px;"}
      size={150}
      color={"#b042b4"}
    />;
  }
  return (
    <div>
      <Container>
        <Title>
          <h3>Event Detail</h3>
        </Title>

        <CopyLinkStyle>
          <div className="copy-link-container" >
            <div className="copy-link-inner">
              <input value={link}
                onChange={({ target: { value } }) => setCopied(false)} />
              <CopyToClipboard text={link}
                onCopy={() => setCopied(true)}>
                <button >{handleCopy()}</button>
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
          <div className="text">Options</div>
          <EventTable handlerEdit={handleEditResponse} handleChange={handleChange} obj={event} titles={titles} />
        </div>
        <div className="countDown">
          <h3>This table will refresh in {countDown} second!</h3>
        </div>
        <div className="groupButton">
          <Button onClick={handleCreateResponse}>Create Response</Button>
          <Link to={"/editEvent/" + event.id}>
            <Button type="submit">Edit Event</Button>
          </Link>
        </div>
      </Container >
      <div>
        {isOpenCreateResponse ? <CreateResponse type="create" titles={titles} obj={event}></CreateResponse> : ""}
        {isOpentEditResponse ? <CreateResponse type="edit" titles={titles} obj={event}></CreateResponse> : ""}
      </div>
    </div>
  );
}


export default EventDetail;
