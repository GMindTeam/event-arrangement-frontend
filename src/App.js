import React from "react";
import Navbar from "./components/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faExclamationCircle,faCheck , faCalendar

} from "@fortawesome/free-solid-svg-icons";
import { EventProvider } from "./components/EventContext";
import { OptionProvider } from "./components/OptionContext";
library.add(faExclamationCircle,faCheck,faCalendar);


function App() {

    return (
      <EventProvider>
        <OptionProvider>
      <div className = "container">
        <div>
          <Navbar />
        </div>
      </div>
      </OptionProvider>
      </EventProvider>
    );
  }


export default App;
