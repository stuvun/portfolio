import React from "react";
import Profile from "../../images/assets/headshot.jpg";
import Calendar from "../../images/home-projects/calendar-preview.png";
import Simon from "../../images/home-projects/simon-preview.png";
import Giphy from "../../images/home-projects/giphy-preview.png";
import Mock from "../../images/home-projects/mock-preview.png";
import { ReactComponent as LinkedIn } from "../../images/links/linkedin.svg";
import { ReactComponent as GitHub } from "../../images/links/github.svg";
import { ReactComponent as JavaScript } from "../../images/skills/javascript.svg";
import { ReactComponent as Html } from "../../images/skills/html.svg";
import { ReactComponent as Css } from "../../images/skills/css.svg";
import { ReactComponent as ReactJS } from "../../images/skills/react.svg";
import { ReactComponent as Python } from "../../images/skills/python.svg";
import { ReactComponent as Postgres } from "../../images/skills/postgres.svg";
import { ReactComponent as Mongodb } from "../../images/skills/mongodb.svg";
import { ReactComponent as Bootstrap } from "../../images/skills/bootstrap.svg";
import { ReactComponent as Node } from "../../images/skills/node.svg";
import { ReactComponent as Agile } from "../../images/skills/agile.svg";
import { ReactComponent as Illustrator } from "../../images/skills/illustrator.svg";
import { ReactComponent as Indesign } from "../../images/skills/indesign.svg";
import { ReactComponent as Divider } from "../../images/assets/divider.svg";
import "./Home.css";
import ProjectData from "../Projects/ProjectData/ProjectData.json";
import Static from "./Static";
import Skill from "./Skill";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [Calendar, Simon, Giphy, Mock],
      skills: [
        <JavaScript className="icon javascript" />,
        <Html className="icon html" />,
        <Css className="icon css" />,
        <Node className="icon node" />,
        <ReactJS className="icon react" />,
        <Python className="icon python" />,
        <Postgres className="icon postgres" />,
        <Mongodb className="icon mongodb" />,
        <Bootstrap className="icon bootstrap" />,
        <Illustrator className="icon illustrator" />,
        <Indesign className="icon indesign" />,
        <Agile className="icon agile" />
      ],
      skillNames: [
        "JAVASCRIPT",
        "HTML",
        "CSS",
        "NODE.JS",
        "REACT",
        "PYTHON",
        "POSTGRES",
        "MONGODB",
        "BOOTSTRAP",
        "ILLUSTRATOR",
        "INDESIGN",
        "AGILE"
      ]
    };
  }
  render() {
    return (
      <div className="home-container">
        <section id="section-one">
          <div className="about-section">
            <div className="about-summary">
              <div className="speech-arrow"></div>
              <span className="about-description">
                Hello! I'm a full-stack developer from Columbia, Maryland who is
                an active learner and problem solver. My ongoing goal is to
                never stop improving!
              </span>
            </div>
            <figure className="profile-figure">
              <img src={Profile} alt="profile" className="profile" />
              <figcaption className="caption job-title">
                <span className="dev-name">STEVEN KIM</span>
                <br />
                WEB DEVELOPER
              </figcaption>
              <div className="icon-container">
                <a
                  href="https://www.linkedin.com/in/steven-kim-194202197/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="icon-link"
                >
                  <LinkedIn className="title-icon linkedin" />
                </a>
                <a
                  href="https://github.com/stuvun"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="icon-link"
                >
                  <GitHub className="title-icon github" />
                </a>
              </div>
            </figure>
          </div>
          <div className="skills-wrapper">
            <div className="skills-container">
              <div className="figure-container">
                {this.state.skills.map((skill, i) => (
                  <Skill
                    key={i}
                    skill={skill}
                    name={this.state.skillNames[i]}
                  />
                ))}
              </div>
            </div>
          </div>
          <Divider className="section-divider" />
        </section>
        <section id="section-two">
          <h1 className="section-two-header">PROJECTS</h1>
          <div className="static-wrapper">
            {this.state.images.map((image, i) => (
              <Static
                key={i}
                image={image}
                name={ProjectData[i].name}
                deployment={ProjectData[i].deployment}
                repository={ProjectData[i].repository}
              />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
