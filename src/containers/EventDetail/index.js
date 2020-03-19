import React, { useEffect,useState } from "react";
import axios from "axios";
import { EventTable } from "../../components";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { Container, Button, Title } from "./style";
function EventDetail(props) {
  const [event, setEvent] = useState("");
  const [loading, setLoading] = useState(true);
  const [titles, setTitle] = useState("");
  useEffect(() => {
    let url =
      "https://miniproject-271309.appspot.com/api/event/" +
      props.match.params.eventID;
    axios
      .get(url)
      .then(response => {
        setEvent(response.data);
        setLoading(false);
      })
      .catch(function(error) {
        console.log(error);
      });
    let url1 =
      "https://miniproject-271309.appspot.com/api/option?eventid=" +
      props.match.params.eventID;
    axios
      .get(url1)
      .then(response => {
        setTitle(response.data);
      })
      .catch(function(error) {
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
      </Container>
    );
  }


export default EventDetail;
