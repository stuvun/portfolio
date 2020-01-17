import React from "react";
import ProjectData from "../../Data/ProjectData.json";
import SkillData from "../../Data/SkillData.json";
import Static from "./Static";
import { ReactComponent as Divider } from "../../images/assets/divider.svg";

const SectionTwo = () => {
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
        {ProjectData.map((project, i) => (
          <Static
            key={i}
            image={require(`../../images/gifs/${project.title}.gif`)}
            name={project.name}
            deployment={project.deployment}
            repository={project.repository}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
