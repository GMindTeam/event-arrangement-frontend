import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter, Route, Link, Switch, Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render((
<BrowserRouter>
<App/>
</BrowserRouter>
), document.getElementById('root'));