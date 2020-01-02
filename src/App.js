import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

class App extends Component {
  render() {
    return (
      <div className="main-nav">
        <Router>
          <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
              <div></div>
            </div>
            <div className="menu">
              <div>
                <div>
                  <ul>
                    <li>
                      <Link to="/">HOME</Link>
                    </li>
                    <li>
                      <Link to="/projects">PROJECTS</Link>
                    </li>
                    <li>
                      <Link to="/resume">RESUME</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar">
            <Link to="/" className="dev-tab-container tab-container">
              <div className="dev-tab">
                <span className="dev-link link">DEVELOPER</span>
              </div>
              <div className="dev-right-point" />
            </Link>
            <Link
              to="/projects"
              className="projects-tab-container tab-container"
            >
              <div className="projects-tab">
                <span className="projects-link link">PROJECTS</span>
              </div>
              <div className="right-point" />
            </Link>
            <Link to="/resume" className="resume-tab-container tab-container">
              <div className="resume-tab">
                <span className="resume-link link">RESUME</span>
              </div>
              <div className="right-point" />
            </Link>
          </nav>
          <Route path="/" exact component={Home}></Route>
          <Route path="/projects" exact component={Projects}></Route>
          <Route path="/resume" exact component={Resume}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
