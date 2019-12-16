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
          <div className="dev-tab-container tab-container">
            <div className="dev-tab">
              <Link to="/" className="dev-link link">
                Developer
              </Link>
            </div>
            <div className="dev-right-point" />
          </div>
          <div className="projects-tab-container tab-container">
            <div className="projects-tab">
              <Link to="/projects" className="projects-link link">
                Projects
              </Link>
            </div>
            <div className="right-point" />
          </div>
          <div className="resume-tab-container tab-container">
            <div className="resume-tab">
              <Link to="/resume" className="resume-link link">
                Resume
              </Link>
            </div>
            <div className="right-point" />
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
