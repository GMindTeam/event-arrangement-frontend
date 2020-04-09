import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import App from "./App";
import { library } from '@fortawesome/fontawesome-svg-core'
import "./index.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faCheck);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
