import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';

import NavBar from "./components/navbar.component";
import Login from "./components/login.component";

import LandingPage from "./components/landingpage.component";
import Register from "./components/create_user.component";
import UsersList from "./components/users.component";

import Incidents from "./components/incidents.component";
import ViewIncident from "./components/incident.component";
import AllIncidents from "./components/all_incidents.component";
import CreateIncident from "./components/create_incident.component";
import EditIncident from "./components/edit_incident.component";

import IncidentComments from "./components/comments.component";
import CreateComment from "./components/create_comment.component";

function App() {
  return (
      <Router>
        <NavBar/>
        <br/>
        <div className="container">
          {/*Landing Page*/}
          <Route path="/" exact component={LandingPage}/>

          {/*Login*/}
          <Route path="/login" component={Login}/>

          {/*Register*/}
          <Route path="/register" component={Register}/>

          {/*Users*/}
          <Route path="/users" component={UsersList}/>

          {/*Incidents*/}
          <Route path="/incidents" exact component={Incidents}/>
          <Route path="/incidents/:id" component={ViewIncident}/>
          <Route path="/incidents/all" component={AllIncidents}/>
          <Route path="/incidents/create" component={CreateIncident}/>
          <Route path="/incidents/edit/:id" component={EditIncident}/>

          {/*Comments*/}
          {/*<Route path="/comments" component={AllComments}/>*/}
          <Route path="/comments/incident/:id" component={IncidentComments}/>
          <Route path="/comments/create" component={CreateComment}/>
        </div>
      </Router>
  );
}

export default App;
