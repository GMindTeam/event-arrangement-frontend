import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter, Route, Link, Switch, Router } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render((
<BrowserRouter>
<App/>
</BrowserRouter>
), document.getElementById('root'));