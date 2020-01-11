import React from "react";
import Profile from "../../images/assets/headshot.jpg";
import Calendar from "../../images/home-projects/calendar-preview.png";
import Simon from "../../images/home-projects/simon-preview.png";
import Giphy from "../../images/home-projects/giphy-preview.png";
import Mock from "../../images/home-projects/mock-preview.png";
import { ReactComponent as LinkedIn } from "../../images/links/linkedin.svg";
import { ReactComponent as GitHub } from "../../images/links/github.svg";
import { ReactComponent as JavaScript } from "../../images/skills/javascript.svg";
import { ReactComponent as HTML } from "../../images/skills/html.svg";
import { ReactComponent as CSS } from "../../images/skills/css.svg";
import { ReactComponent as ReactJS } from "../../images/skills/react.svg";
import { ReactComponent as Python } from "../../images/skills/python.svg";
import { ReactComponent as Postgres } from "../../images/skills/postgres.svg";
import { ReactComponent as Mongodb } from "../../images/skills/mongodb.svg";
import { ReactComponent as Bootstrap } from "../../images/skills/bootstrap.svg";
import { ReactComponent as Node } from "../../images/skills/node.svg";
import { ReactComponent as Agile } from "../../images/skills/agile.svg";
import { ReactComponent as Illustrator } from "../../images/skills/illustrator.svg";
import { ReactComponent as Indesign } from "../../images/skills/indesign.svg";
import "./Home.css";

const Home = () => {
  const styleOne = {
    backgroundImage: `url(${Calendar})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  };
  const styleTwo = {
    backgroundImage: `url(${Simon})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  };
  const styleThree = {
    backgroundImage: `url(${Giphy})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  };
  const styleFour = {
    backgroundImage: `url(${Mock})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  };
  return (
    <div className="home-container">
      <section id="section-one">
        <div className="about-section">
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
          <div className="about-summary">
            <div className="speech-arrow"></div>
            <span className="about-description">
              Hello! I'm a full-stack developer from Columbia, Maryland who is
              an active learner and problem solver. My ongoing goal is to never
              stop improving!
            </span>
          </div>
        </div>
        <div className="skills-wrapper">
          <div className="skills-container">
            <div className="figure-container">
              <figure className="figure">
                <JavaScript className="icon javascript" />
                <figcaption className="caption">JAVASCRIPT</figcaption>
              </figure>
              <figure className="figure">
                <HTML className="icon html" />
                <figcaption className="caption">HTML</figcaption>
              </figure>
              <figure className="figure">
                <CSS className="icon css" />
                <figcaption className="caption">CSS</figcaption>
              </figure>
              <figure className="figure">
                <Node className="icon node" />
                <figcaption className="caption">NODE.JS</figcaption>
              </figure>
              <figure className="figure">
                <ReactJS className="icon react" />
                <figcaption className="caption">REACT</figcaption>
              </figure>
              <figure className="figure">
                <Python className="icon python" />
                <figcaption className="caption">PYTHON</figcaption>
              </figure>
              <figure className="figure">
                <Postgres className="icon postgres" />
                <figcaption className="caption">POSTGRESQL</figcaption>
              </figure>
              <figure className="figure">
                <Mongodb className="icon mongodb" />
                <figcaption className="caption">MONGODB</figcaption>
              </figure>
              <figure className="figure">
                <Bootstrap className="icon bootstrap" />
                <figcaption className="caption">BOOTSTRAP</figcaption>
              </figure>
              <figure className="figure">
                <Illustrator className="icon illustrator" />
                <figcaption className="caption">ILLUSTRATOR</figcaption>
              </figure>
              <figure className="figure">
                <Indesign className="icon indesign" />
                <figcaption className="caption">INDESIGN</figcaption>
              </figure>
              <figure className="figure">
                <Agile className="icon agile" />
                <figcaption className="caption">AGILE</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section id="section-two">
        <div className="static-wrapper">
          <div className="static-container">
            <img className="static" src={Calendar} alt="Calendar App" />
          </div>
          <div className="static-container">
            <img className="static" src={Simon} alt="Simon Game" />
          </div>
          <div className="static-container">
            <img className="static" src={Giphy} alt="Giphy Slider UI" />
          </div>
          <div className="static-container">
            <img className="static" src={Mock} alt="Mock Site" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
