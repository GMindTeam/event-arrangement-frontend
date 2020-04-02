import React from "react";
import Navbar from "./components/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { EventProvider } from "./components/EventContext";
import { OptionProvider } from "./components/OptionContext";
library.add(faPlusCircle);


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
