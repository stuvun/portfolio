import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar">
          <div className="portfolio-tab">
            <Link to="/" className="home-link link">
              Portfolio
            </Link>
          </div>
          <div className="projects-tab">
            <Link to="/projects" className="projects-link link">
              Projects
            </Link>
          </div>
        </nav>
        <Route path="/" exact component={Home}></Route>
        <Route path="/projects" exact component={Projects}></Route>
      </Router>
    );
  }
}

export default App;
