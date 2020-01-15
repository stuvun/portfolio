import React from "react";
import {
  Calendar,
  Simon,
  Giphy,
  Mock,
  Profile,
  Email,
  PDF
} from "../../images/index";
import { ReactComponent as Logo } from "../../images/assets/portfolio-logo.svg";
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
import { ReactComponent as DividerTwo } from "../../images/assets/divider-two.svg";
import Resume from "../../images/links/resume.pdf";
import "./Home.css";
import ProjectData from "../../Data/ProjectData.json";
import Static from "./Static";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.images = [Calendar, Simon, Giphy, Mock];
  }
  render() {
    const defaultLinkProps = {
      rel: "noopener noreferrer",
      target: "_blank",
      className: "icon-link"
    };
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
            <div className="about-intro">
              <Logo className="portfolio-logo" />
              <div className="about-summary">
                <div className="speech-arrow"></div>
                <span className="about-description">
                  Hello! I'm a full-stack software engineer from Columbia,
                  Maryland. I'm an active learner and problem solver who's never
                  afraid of new challenges!
                </span>
              </div>
              <div className="profile-figure">
                <div className="caption job-title">
                  <span className="dev-name">STEVEN KIM</span>
                  <br />
                  WEB DEVELOPER
                </div>
              </div>
              <a className="view-container" href="#section-two">
                <div className="view-more">
                  <div className="down-arrow down-arrow-top">&#8681;</div>
                  <div className="down-arrow down-arrow-bottom">&#8681;</div>
                </div>
                <span>
                  View Portfolio
                  <div className="underline" />
                </span>
              </a>
            </div>
            <div className="navbar-container">
              <nav className="navbar">
                <div className="nav-link-container">
                  <a className="nav-link" href="#section-one">
                    Home
                    <div className="underline" />
                  </a>
                </div>
                <div className="nav-link-container">
                  <a className="nav-link" href="#section-two">
                    Projects
                    <div className="underline" />
                  </a>
                </div>
                <div className="nav-link-container">
                  <a className="nav-link" href="#section-three">
                    About
                    <div className="underline" />
                  </a>
                </div>
              </nav>
              <div className="navbar-shadow" />
            </div>
            <div className="scrollnav-container">
              <nav className="navbar">
                <div className="nav-link-container">
                  <a className="nav-link" href="#section-one">
                    Home
                    <div className="underline" />
                  </a>
                </div>
                <div className="nav-link-container">
                  <a className="nav-link" href="#section-two">
                    Projects
                    <div className="underline" />
                  </a>
                </div>
                <div className="nav-link-container">
                  <a className="nav-link" href="#section-three">
                    About
                    <div className="underline" />
                  </a>
                </div>
              </nav>
              <div className="navbar-shadow" />
            </div>
          </div>
        </section>
        <section id="section-two">
          <div className="skill-divider">
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
          </div>
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
        <section id="section-three">
          <DividerTwo className="section-divider" />
          <div className="profile-container">
            <div className="icon-container">
              <a
                href="https://www.linkedin.com/in/steven-kim-194202197/"
                {...defaultLinkProps}
              >
                <LinkedIn className="title-icon linkedin" />
              </a>
              <a href="https://github.com/stuvun" {...defaultLinkProps}>
                <GitHub className="title-icon github" />
              </a>
            </div>
            <a href={Resume} {...defaultLinkProps} className="resume-container">
              <img src={PDF} alt="resume-pdf" className="resume-pdf" />
              <span>
                View Resume
                <div className="underline" />
              </span>
            </a>
            <img src={Profile} alt="profile" className="profile" />
            <a
              href="sskim14@gmail.com"
              {...defaultLinkProps}
              className="contact-container"
            >
              <img src={Email} alt="email" className="email" />
              <span>
                sskim14@gmail.com
                <div className="underline" />
              </span>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
