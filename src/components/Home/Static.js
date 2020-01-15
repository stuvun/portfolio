import React from "react";

const Static = ({ image, name, deployment, repository, technologies }) => {
  return (
    <div className="static-container">
      <div className="static-overlay">
        <span className="technologies">{technologies}</span>
        <a
          className="static-link static-deployment"
          href={deployment}
          rel="deployment"
          target="__blank noreferrer"
        >
          DEPLOYED APP
        </a>
        <a
          className="static-link static-repository"
          href={repository}
          rel="repository"
          target="__blank noreferrer"
        >
          REPOSITORY
        </a>
      </div>
      <div className="static-holder">
        <span className="static-header">{name}</span>
        <img className="static" src={image} alt="Calendar App" />
      </div>
    </div>
  );
};

export default Static;
