import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlusCircle);


function App() {

    return (
      <div className = "container">
        <div>
          <Navbar />
        </div>
      </div>
    );
  }


export default App;
