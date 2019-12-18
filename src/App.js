import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab);

class App extends Component {
  render() {
    return (
      <div className="main-nav">
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
        <div className="icon-container">
          <a
            href="https://www.linkedin.com/in/steven-kim-194202197/"
            rel="linkedin"
            target="_blank"
            className="icon-link"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icon icon-linkedin"
              size="2x"
            />
          </a>
          <a
            href="https://github.com/stuvun"
            rel="github"
            target="_blank"
            className="icon-link"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icon icon-github"
              size="2x"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
