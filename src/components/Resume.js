import React, { Component } from "react";
import "./Resume.css";
import resume from "../images/resume.png";
import resumeLink from "../images/resume.pdf";

class Resume extends Component {
  render() {
    return (
      <div className="resume-page">
        <a className="resumeLink" href={resumeLink}>
          View PDF
        </a>
        <div className="resumeContainer">
          <img src={resume} className="resume" />
        </div>
      </div>
    );
  }
}

export default Resume;
