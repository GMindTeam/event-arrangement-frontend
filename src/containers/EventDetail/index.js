import React, { useEffect, useState } from "react";
import axios from "axios";
import { EventTable } from "../../components";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { Container, Button, Title, CopyLinkStyle } from "./style";
import { CopyToClipboard } from 'react-copy-to-clipboard';
function EventDetail(props) {
  const [event, setEvent] = useState("");
  const [loading, setLoading] = useState(true);
  const [titles, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);

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

  function handleCopy() {
    if (copied) return 'copied';
    return 'copy';
  }

  if (loading) {
    return <BounceLoader
      css={"margin:0 auto;margin-top:50px;"}
      size={150}
      color={"#b042b4"}
    />;
  }
  return (
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
      <EventTable obj={event} titles={titles} />
    </div>

    <div className="groupButton">
      <Link to="/createResponse">
        <Button type="submit">Create Response</Button>
      </Link>
      <Link to={"/editEvent/" + event.id}>
        <Button type="submit">Edit Event</Button>
      </Link>
    </div>
      </Container >
    );
}


export default EventDetail;
