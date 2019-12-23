import React from "react";
import ProjectData from "../ProjectData/ProjectData.json";

const Slide = ({ image, label }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  };
  return (
    <div>
      <div>
        {ProjectData.map((project, index) => {
          return (
            <div key={index}>
              <div>
                <h1>{project.name}</h1>
                <h2>Technologies Used</h2>
                <ul>
                  {project.technologies.map((technology, i) => {
                    return <li key={i}>{technology}</li>;
                  })}
                </ul>
                <a
                  href={project.deployment}
                  rel="deployed app"
                  target="__blank noreferrer"
                >
                  Deployed App
                </a>
                <a
                  href={project.repository}
                  rel="repository"
                  target="__blank noreferrer"
                >
                  Respository
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="slide" style={styles}>
        <span className="label">{label}</span>
      </div>
    </div>
  );
};

export default Slide;
