import React from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import CreateEvent from "../screens/CreateEvent";
import Credit from "../screens/Credit";
import EventDetail from "../screens/EventDetail";
import styled from "styled-components";
import EventTable from "../components/EventTable";
import ResponseDetail from "../screens/ResponseDetail";
import CreateResponse from "../screens/CreateResponse";
import EditEvent from "../screens/EditEvent";

const NavBar = styled("nav")`
  background-color: #b042b4;
  color: #fff;
  font-family: sans-serif;
  justify-content: space-evenly;
  flex-flow: row nowrap;
  align-items: center;

  .nav-link {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
  }
  a {
    color: white;
    font-size: 2.5vh;
    /* text-decoration: none; */
  }
`;

const Button = styled.button`
  background: ${props => (props.primary ? "#b042b4" : "white")};
  color: ${props => (props.primary ? "white" : "#b042b4")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  margin-right: 5em;
  border: 2px solid #b042b4;
  border-radius: 3em;
  float: right;
  :hover {
    border: 2px solid #9c27b0;
    color: #9c27b0;
  }
`;

class Navbar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar>
            <ul className="nav-link">
              <Link to="/create">
                <img src={require("../images/logo.PNG")} />
              </Link>

              <li className="link">
                <Link to="/credit">Credit</Link>
              </li>
              <li className="link">
                <Link to="/create">
                  <Button>Create Event</Button>
                </Link>
              </li>

              <li className="link">
                <Link to="/eventDetail">
                  <Button>Event Detail</Button>
                </Link>
              </li>
            </ul>
          </NavBar>

          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/credit">
              <Credit />
            </Route>
            <Route path="/eventDetail">
              <EventDetail />
            </Route>
            <Route path="/create">
              <CreateEvent />
            </Route>
            <Route path="/responseDetail">
              <ResponseDetail />
            </Route>
            <Route path="/createResponse">
              <CreateResponse />
            </Route>
            <Route path="/editEvent">
              <EditEvent />
            </Route>
            <Switch>
              <Route path="/event/:eventID" component={EventDetail} />
            </Switch>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Navbar;
