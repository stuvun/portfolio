import React from "react";
import ProjectData from "../../Data/ProjectData.json";
import SkillData from "../../Data/SkillData.json";
import Static from "./Static";
import { ReactComponent as Divider } from "../../images/assets/divider.svg";
import {
  Calendar,
  Simon,
  Giphy,
  Mock,
  JavaScript,
  Html,
  Css,
  ReactJS,
  Python,
  Node,
  Postgres,
  Mongodb,
  Bootstrap,
  Agile,
  Illustrator,
  Indesign
} from "../../images/index";

const SectionTwo = () => {
  const images = [Calendar, Simon, Giphy, Mock];
  const skills = [
    JavaScript,
    Html,
    Css,
    ReactJS,
    Python,
    Node,
    Postgres,
    Mongodb,
    Bootstrap,
    Agile,
    Illustrator,
    Indesign
  ];
  console.log(JSON.stringify(SkillData[1].image));
  return (
    <section id="section-two">
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
      <div className="skill-divider">
        <div className="skills-wrapper">
          <div className="skills-container">
            <div className="figure-container">
              {SkillData.map((skill, i) => (
                <figure className="figure" key={i} image={skill.image}>
                  <img
                    src={require(`../../images/skills/${skill.title}.svg`)}
                    alt={skill.name}
                    className={skill.class}
                  />
                  <figcaption className="caption">{skill.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
        <Divider className="section-divider" />
      </div>
      <h1 className="section-two-header">PROJECTS</h1>
      <div className="static-wrapper">
        {images.map((image, i) => (
          <Static
            key={i}
            image={image}
            name={ProjectData[i].name}
            deployment={ProjectData[i].deployment}
            repository={ProjectData[i].repository}
            technologies={ProjectData[i].technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
