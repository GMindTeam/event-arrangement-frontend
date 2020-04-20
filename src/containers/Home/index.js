import React, { useState, useEffect } from "react";
import { EventCard, Button, Title } from './style';
import { routePath } from '../../config/routes';
import { useHistory } from "react-router-dom";
export default function Home(props) {
    let history = useHistory();
    const [createdEventList, setCreatedEventList] = useState([]);
    const [responsedEventList, setResponsedEventList] = useState([]);
    useEffect(() => {
        const eventData = getCookie("eventData");
        if (eventData !== "") {
            if (eventData.createdEvent.length > 0) 
            {
                setCreatedEventList(eventData.createdEvent);
                
            }
            if (eventData.responsedEvent.length > 0) 
            {
                setResponsedEventList(eventData.responsedEvent);
            }
        }
    }, [])
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return JSON.parse(c.substring(name.length, c.length));
            }
        }
        return "";
    }

    function fetchCreatedEventFromCookie() {
        
        if (createdEventList instanceof Array) {
            return createdEventList.map((CurrentEvent, key) => {
                return (
                    <EventCard key={key}>
                        <Title><h3>Event bạn đã tạo</h3></Title>
                        <div className="content">
                            <div className="button">
                                <Button onClick={() => {
                                    let path = routePath.eventDetail + CurrentEvent.eventid;
                                    history.push(path);
                                }}>Chi Tiết</Button>
                            </div>
                            <div>
                                <h2 className="eventName">{CurrentEvent.name}</h2>
                            </div>
                            <div>
                                <p className="eventDescription">{CurrentEvent.description}</p>
                            </div>
                        </div>
                    </EventCard>);
            });
        }
    }
    function fetchResponsedEventFromCookie() {
        if (responsedEventList instanceof Array) {
            return responsedEventList.map((event, i) => {
                return (
                    <EventCard key={i}>
                        <Title><h3>Event bạn đã phản hồi</h3></Title>
                        <div className="content">
                            <div className="button">
                                <Button onClick={() => {
                                    let path = routePath.eventDetail + event.eventid;
                                    history.push(path);
                                }}>Chi Tiết</Button>
                            </div>
                            <div>
                                <h2 className="eventName">{event.name}</h2>
                            </div>
                            <div>
                                <p className="eventDescription">{event.description}</p>
                            </div>
                        </div>
                    </EventCard>);
            });
        }

    }

    return (
        <div>
            { createdEventList.length === 0 && responsedEventList.length === 0 ? <div className="mesage"  ><center><h3>Cùng tạo event nào!!</h3></center></div>: ''}
            {fetchCreatedEventFromCookie()}
            {fetchResponsedEventFromCookie()}
        </div>
    );
}