import React from "react";

const Slide = ({
  image,
  name,
  technologies,
  description,
  deployment,
  repository
}) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  };
  return (
    <div className="slide">
      <h1 className="name">{name}</h1>
      <div className="slide-contents">
        <div className="image" style={styles} />
        <div className="project-details">
          <div className="technologies-container">
            <h2 className="title">TECHNOLOGIES</h2>
            <div className="details">{technologies}</div>
          </div>
          <div className="description-container">
            <h2 className="title">SUMMARY</h2>
            <div className="details">{description}</div>
          </div>
          <div className="project-link-container">
            <a
              className="project-link"
              href={deployment}
              rel="deployment"
              target="__blank noreferrer"
            >
              DEPLOYED SITE
            </a>
            <a
              className="project-link"
              href={repository}
              rel="repository"
              target="__blank noreferrer"
            >
              REPOSITORY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
