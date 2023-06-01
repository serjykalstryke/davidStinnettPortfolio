import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faSatellite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import NavBar from "./components/layout/NavBar";

import Home from "./components/pages/Home";

import Portfolio from "./components/pages/Portfolio";

library.add(fas);

function App() {
  return (
    <Router>
      <div className="s p-1 dot">
        <FontAwesomeIcon icon={["fas", "satellite"]} size="1x" />
      </div>
      <NavBar />
      <div className="jumbotron container-fluid py-5">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
