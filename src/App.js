import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-sm">
          <Link to="/" className="nav-link navbar-brand link">
            Portfolio
          </Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <Link to="/projects" className="nav-item nav-link link">
              Projects
            </Link>
            <Link to="/resume" className="nav-item nav-link link">
              Resume
            </Link>
          </ul>
        </nav>
        <Route path="/" exact component={Home}></Route>
        <Route path="/projects" exact component={Projects}></Route>
        <Route path="/resume" exact component={Resume}></Route>
      </Router>
    );
  }
}

export default App;
