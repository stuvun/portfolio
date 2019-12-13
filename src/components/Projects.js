import React, { Component } from "react";
import "./Projects.css";
import Calendar from "../images/calendarPreview.png";
import Giphy from "../images/giphySlider.gif";
import Simon from "../images/simonExample.gif";
import Mock from "../images/mockExample.gif";

class Projects extends Component {
  render() {
    return (
      <div className="projects-wrapper">
        <div className="arrow-left" />
        <div className="projects-container">
          <img className="calendar container" src={Calendar} alt="Calendar" />
          <img className="giphy container" src={Giphy} alt="Giphy" />
          <img className="simon container" src={Simon} alt="Simon" />
          <img className="mock container" src={Mock} alt="Mock" />
        </div>
        <div className="arrow-right" />
      </div>
    );
  }
}

export default Projects;
