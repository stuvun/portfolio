import React from "react";
import Profile from "../../images/headshot.jpg";
import { ReactComponent as JavaScript } from "../../images/javascript.svg";
import { ReactComponent as HTML } from "../../images/html.svg";
import { ReactComponent as CSS } from "../../images/css.svg";
import { ReactComponent as ReactJS } from "../../images/react.svg";
import { ReactComponent as Python } from "../../images/python.svg";
import { ReactComponent as LinkedIn } from "../../images/linkedin.svg";
import { ReactComponent as GitHub } from "../../images/github.svg";
import { ReactComponent as Postgres } from "../../images/postgres.svg";
import { ReactComponent as Mongodb } from "../../images/mongodb.svg";
import { ReactComponent as Bootstrap } from "../../images/bootstrap.svg";
import { ReactComponent as Node } from "../../images/node.svg";
import { ReactComponent as Agile } from "../../images/agile.svg";
import { ReactComponent as Illustrator } from "../../images/illustrator.svg";
import { ReactComponent as Indesign } from "../../images/indesign.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
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
            Hello! I'm a full-stack developer from Columbia, Maryland who is an
            active learner and problem solver. My ongoing goal is to never stop
            improving!
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
    </div>
  );
};

export default Home;
