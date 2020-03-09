import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch, Router } from "react-router-dom";
import axios from "axios";
import CreateEvent from "./screens/CreateEvent";
import Credit from "./screens/Credit";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    students: []
  };

  render() {
    return (
      <div>
        
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
