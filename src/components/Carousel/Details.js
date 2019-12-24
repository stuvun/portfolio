import React from "react";
import ProjectData from "../ProjectData/ProjectData.json";

const Details = () => {
  return (
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
  );
};

export default Details;
