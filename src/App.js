import React, { Component } from "react";
import "./App.css";
import { Navbar } from "./components";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faCoffee,
  faPlus,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare, faCoffee, faPlus, faPlusCircle);


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
