import React, { Component } from "react";
import "./App.css";
import Logo from "./images/assets/portfolio-logo.svg";
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
    return <Home />;
  }
}

export default App;
