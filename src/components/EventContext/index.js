import React, { useState,createContext} from "react";

export const EventContext = createContext();
export const EventProvider = props =>{
    const [event,setEvent] = useState('');
return <EventContext.Provider value ={[event, setEvent]}>{props.children}</EventContext.Provider>;
}
