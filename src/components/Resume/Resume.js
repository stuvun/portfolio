import React, { Component } from "react";
import "./Resume.css";
import resume from "../../images/resume.png";
import resumeLink from "../../images/resume.pdf";
import PDF from "../../images/pdf.png";

class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <a className="pdf-link" href={resumeLink}>
          <img src={PDF} rel="pdf" className="pdf" alt="pdf" />
          <span className="view">View PDF</span>
        </a>
        <div className="image-container">
          <img src={resume} className="resume" alt="resume" />
        </div>
      </div>
    );
  }
}

export default Resume;
