import React from "react";

const Static = ({ image, name, deployment, repository }) => {
  return (
    <div className="static-container">
      <div className="static-overlay">
        <a
          className="static-link"
          href={deployment}
          rel="deployment"
          target="__blank noreferrer"
        >
          DEPLOYED APP
        </a>
        <a
          className="static-link"
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
