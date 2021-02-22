import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faSatellite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NavBar from "./components/layout/NavBar"


import Home from "./components/pages/Home"

import Portfolio from "./components/pages/Portfolio"


library.add(fas)

function App() {
  return (
    <Router>
      <div className="s p-1 dot"><FontAwesomeIcon icon ={["fas", "satellite"]} size="1x"/></div>
      <NavBar />
      <Jumbotron className="jumbotron">
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Portfolio" component={Portfolio} />
      </Switch>
      </Jumbotron>
    
    </Router>
  );
}

export default App;
