import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import DevLogo from "./images/assets/portfolioLogo.png";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

class App extends Component {
  constructor(props) {
    super(props);
    const menuStyles = {
      visibility: "hidden"
    };
    this.state = {
      menuStyles
    };
  }
  handleLinkClick = () => {
    this.setState({ menuStyles: { visibility: "hidden" } });
  };
  handleBurgerClick = () => {
    this.setState({ menuStyles: { visibility: "visible" } });
  };
  render() {
    return (
      <div className="main-nav">
        <Router>
          <div className="menu-wrap">
            <input
              type="checkbox"
              className="toggler"
              onClick={this.handleBurgerClick}
            />
            <div className="hamburger">
              <div></div>
            </div>
            <div className="menu" style={this.state.menuStyles}>
              <div>
                <div className="menu-list">
                  <div className="item-container"></div>
                  <Link
                    to="/"
                    className="menu-item"
                    onClick={this.handleLinkClick}
                  >
                    HOME
                  </Link>
                  <Link
                    to="/projects"
                    className="menu-item"
                    onClick={this.handleLinkClick}
                  >
                    PROJECTS
                  </Link>
                  <Link
                    to="/resume"
                    className="menu-item"
                    onClick={this.handleLinkClick}
                  >
                    RESUME
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar">
            <Link to="/" className="dev-logo-container">
              <img src={DevLogo} alt="developer-logo" className="dev-logo" />
            </Link>
            <div className="nav-link-container">
              <Link to="/" className="nav-link home-link" title="HOME">
                HOME
                <div className="underline" />
              </Link>
              <Link
                to="/projects"
                className="nav-link projects-link"
                title="PROJECTS"
              >
                PROJECTS
                <div className="underline" />
              </Link>
              <Link
                to="/resume"
                className="nav-link resume-link"
                title="RESUME"
              >
                RESUME
                <div className="underline" />
              </Link>
            </div>
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
