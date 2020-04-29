import React from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import CreateEvent from "../../containers/CreateEvent";
import Home from "../../containers/Home";
import EventDetail from "../../containers/EventDetail";
import { Nav} from "./style";
import { routePath} from "../../config/routes";
import  Button  from "../Button"

export default function NavBar() {

    return (
      <BrowserRouter>
        <div>
          <Nav>
            <ul className="nav-link">
              <Link  to={routePath.home}>
                <img alt="Logo" className="logo"  src={require("../../images/logo.PNG")} />
              </Link>

              <li className="link">
                <Link to={routePath.createEvent}>
                  <div className="btn">
                    <Button>Tạo sự kiện</Button>
                  </div>
                  
                </Link>
              </li>

        
            </ul>
          </Nav>

          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Switch>
            <Route path={routePath.createEvent}>
              <CreateEvent type="create"/>
            </Route>
            <Route path={routePath.editEvent}>
              <CreateEvent type="edit"/>
            </Route>
            <Route exact path={routePath.home}>
              <Home/>
            </Route>
            <Switch>
              <Route path={routePath.eventDetailNavBar} component={EventDetail} />
            </Switch>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

