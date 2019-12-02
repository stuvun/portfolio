import React, { Component } from "react";
import "./Resume.css";
import resume from "../images/resume.png";

class Resume extends Component {
    render() {
        return (
            <div className="resumeContainer">
                <img src={resume} className="resume"/>
            </div>
        )
    }
}

export default Resume;