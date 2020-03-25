<<<<<<< HEAD
import React, { useEffect, useState, useContext } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 04db4bbf76e438d90e8825f5990b39cc0242097e
import EventTable from "../../components/EventTable";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { Container, Button, Title, CopyLinkStyle } from "./style";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CreateResponse from "../CreateResponse";
import { getEventDetail, getOptions } from "../../api";
<<<<<<< HEAD
import { EventContext } from "../../components/EventContext";
import { OptionContext } from "../../components/OptionContext";
import { appPath } from '../../config/constants';
function EventDetail(props) {
  const [event, setEvent] = useContext(EventContext);
  const [loading, setLoading] = useState(true);
  const [, setOption] = useContext(OptionContext);
=======
function EventDetail(props) {
  const [event, setEvent] = useState("");
>>>>>>> 04db4bbf76e438d90e8825f5990b39cc0242097e
  const [eventCopy, setEventCopy] = useState("");
  const [countDown, setCountDown] = useState(0);
  const [isOpentEditResponse, setIsOpentEditResponse] = useState(false);

  const [isOpenCreateResponse, setIsOpenCreateResponse] = useState(false);

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
<<<<<<< HEAD
  }, [countDown, eventCopy, props.match.params.eventID, setEvent]);


  useEffect(() => {
    setLink(appPath.domain + props.match.params.eventID);
=======
  }, [countDown, eventCopy, props.match.params.eventID]);


  useEffect(() => {
    setLink('http://localhost:3000/event/' + props.match.params.eventID);
>>>>>>> 04db4bbf76e438d90e8825f5990b39cc0242097e
    getEventDetail(props.match.params.eventID)
      .then(response => {
        setEvent(response.data);
        setLoading(false);
<<<<<<< HEAD
=======

>>>>>>> 04db4bbf76e438d90e8825f5990b39cc0242097e
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

<<<<<<< HEAD
=======

>>>>>>> 04db4bbf76e438d90e8825f5990b39cc0242097e
      })
      .catch(function (error) {
        console.log(error);
      });
<<<<<<< HEAD
  }, [props.match.params.eventID, setEvent]);
=======
  }, [props.match.params.eventID]);
>>>>>>> 04db4bbf76e438d90e8825f5990b39cc0242097e


  function handleEditResponse() {
    if (isOpenCreateResponse) setIsOpenCreateResponse(false);
    setIsOpentEditResponse(true);
  }

  function handleChange(newResponseList) {

    var newEvent = event;
    newEvent.responselist = newResponseList;
    setEvent(newEvent);
  }
<<<<<<< HEAD
  function handleEditEvent() {
    let titlesTemp = [...titles];
    let OptionArr = [];
    titlesTemp.map((singleTitle) => {
      return OptionArr.push(singleTitle.content);
    });
    setOption(OptionArr);
=======
  function handleCopy() {
    if (copied) return 'copied';
    return 'copy';
>>>>>>> 04db4bbf76e438d90e8825f5990b39cc0242097e
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
<<<<<<< HEAD
                <button >{copied ? "copied" : "copy"}</button>
=======
                <button >{handleCopy()}</button>
>>>>>>> 04db4bbf76e438d90e8825f5990b39cc0242097e
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
<<<<<<< HEAD
          <EventTable handlerEdit={handleEditResponse} handleChange={handleChange} event={event} titles={titles} />
=======
          <EventTable handlerEdit={handleEditResponse} handleChange={handleChange} obj={event} titles={titles} />
>>>>>>> 04db4bbf76e438d90e8825f5990b39cc0242097e
        </div>
        <div className="countDown">
          <h3>This table will refresh in {countDown} second!</h3>
        </div>
        <div className="groupButton">
          <Button onClick={handleCreateResponse}>Create Response</Button>
          <Link to={"/editEvent/" + event.id}>
<<<<<<< HEAD
            <Button type="submit" onClick={handleEditEvent}>Edit Event</Button>
=======
            <Button type="submit">Edit Event</Button>
>>>>>>> 04db4bbf76e438d90e8825f5990b39cc0242097e
          </Link>
        </div>
      </Container >
      <div>
        {isOpenCreateResponse ? <CreateResponse type="create" titles={titles}></CreateResponse> : ""}
        {isOpentEditResponse ? <CreateResponse type="edit" titles={titles}></CreateResponse> : ""}
      </div>
    </div>
  );
}


export default EventDetail;
