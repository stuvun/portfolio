import React, { Component } from "react";
import "./Home.css";
import headshot from "../images/headshot.jpg";

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <img src={headshot} className="headshot" />
        <h1 className="title">Software Engineer</h1>
      </div>
    );
  }
}

export default Home;
