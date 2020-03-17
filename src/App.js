import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch, Router } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCoffee,
  faPlus,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare, faCoffee, faPlus, faPlusCircle);
const Container = styled("div")`
  background-color: #e4e4e4;
  padding-bottom: 15em;
`;

class App extends Component {
  state = {
    students: []
  };

  render() {
    return (
      <div>
        <Container>
          <Navbar />
        </Container>
      </div>
    );
  }
}

export default App;
