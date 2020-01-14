import React from "react";
import { Profile, Calendar, Simon, Giphy, Mock } from "../../images/index";
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
import ProjectData from "../../Data/ProjectData.json";
import Static from "./Static";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.images = [Calendar, Simon, Giphy, Mock];
  }
  render() {
    const skills = [
      <JavaScript className="icon javascript" label="JAVASCRIPT" />,
      <Html className="icon html" label="HTML" />,
      <Css className="icon css" label="CSS" />,
      <Node className="icon node" label="NODE.JS" />,
      <ReactJS className="icon react" label="REACT" />,
      <Python className="icon python" label="PYTHON" />,
      <Postgres className="icon postgres" label="POSTGRES" />,
      <Mongodb className="icon mongodb" label="MONGODB" />,
      <Bootstrap className="icon bootstrap" label="BOOTSTRAP" />,
      <Illustrator className="icon illustrator" label="ILLUSTRATOR" />,
      <Indesign className="icon indesign" label="INDESIGN" />,
      <Agile className="icon agile" label="AGILE" />
    ];
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
                {skills.map((skill, i) => (
                  <figure className="figure" key={i}>
                    {skill}
                    <figcaption className="caption">
                      {skill.props.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
          <Divider className="section-divider" />
        </section>
        <section id="section-two">
          <h1 className="section-two-header">PROJECTS</h1>
          <div className="static-wrapper">
            {this.images.map((image, i) => (
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
