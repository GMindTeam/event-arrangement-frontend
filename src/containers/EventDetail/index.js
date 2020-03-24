import React, { useEffect, useState } from "react";
import axios from "axios";
import EventTable  from "../../components/EventTable";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { Container, Button, Title, CopyLinkStyle } from "./style";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CreateResponse from "../CreateResponse";
function EventDetail(props) {
  const [event, setEvent] = useState("");
  const [countDown, setCountDown] = useState(10);
  const [timer, setTimer] = useState(0);
  const [isOpentEditResponse, setIsOpentEditResponse] = useState(false);
  const [isOpenCreateResponse, setIsOpenCreateResponse] = useState(false);
  const [loading, setLoading] = useState(true);
  const [titles, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    countDown >-1  && setTimeout(() => setCountDown(countDown - 1), 1000);
    countDown < 0 && setCountDown(5);
    countDown === 5 && callAPI(5);
  }, [countDown]);
  function callAPI()
  {
    let url =
      "https://miniproject-271309.appspot.com/api/event/" +
      props.match.params.eventID;
      setLink('http://localhost:3000/event/'+props.match.params.eventID );
    axios
      .get(url)
      .then(response => {
        setEvent(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    
    let url =
      "https://miniproject-271309.appspot.com/api/event/" +
      props.match.params.eventID;
      setLink('http://localhost:3000/event/'+props.match.params.eventID );
    axios
      .get(url)
      .then(response => {
        setEvent(response.data);

      })
      .catch(function (error) {
        console.log(error);
      });
    let url1 =
      "https://miniproject-271309.appspot.com/api/option?eventid=" +
      props.match.params.eventID;
    axios
      .get(url1)
      .then(response => {
        setTitle(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
      
    return () => {

    }
  }, [props.match.params.eventID])

  // function fetchName() {
  //   return (
  //     <div>
  //       <h2 className="eventName">{event.name}</h2>
  //     </div>
  //   );
  // }
  // function fetchDescription() {
  //   return (
  //     <div>
  //       <p className="eventDescription">{event.description}</p>
  //     </div>
  //   );
  // }

  function handleEditResponse() {
    if(isOpenCreateResponse) setIsOpenCreateResponse(false);
    setIsOpentEditResponse(true);
  }
  function handleCopy() {
    if (copied) return 'copied';
    return 'copy';
  }
  function handleCreateResponse()
  {
    if(isOpentEditResponse) setIsOpentEditResponse(false);
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
      <EventTable handler={handleEditResponse} obj={event} titles={titles} />
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
