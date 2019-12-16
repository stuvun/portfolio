import React, { Component } from "react";
import "./Resume.css";
import resume from "../../images/resume.png";
import resumeLink from "../../images/resume.pdf";

class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <a className="pdf-link" href={resumeLink}>
          View PDF
        </a>
        <div className="image-container">
          <img src={resume} className="resume" />
        </div>
      </div>
    );
  }
}

export default Resume;
