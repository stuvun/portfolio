import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar">
          <div className="portfolio-tab">
            <Link to="/" className="home-link link">
              Developer
            </Link>
          </div>
          <div className="projects-tab">
            <Link to="/projects" className="projects-link link">
              Projects
            </Link>
          </div>
          <div className="resume-tab">
            <Link to="/resume" className="resume-link link">
              Resume
            </Link>
          </div>
        </nav>
        <Route path="/" exact component={Home}></Route>
        <Route path="/projects" exact component={Projects}></Route>
        <Route path="/resume" exact component={Resume}></Route>
      </Router>
    );
  }
}

export default App;
