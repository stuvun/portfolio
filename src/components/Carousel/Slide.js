import React from "react";
import { ReactComponent as GitHub } from "../../images/github.svg";
import { ReactComponent as Internet } from "../../images/internet.svg";

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
      <div className="header">
        <h1 className="name">{name}</h1>
      </div>
      <div className="slide-contents">
        <figure className="image-container">
          <div className="image" style={styles} />
          <figcaption className="description">
            {description}
            <h2 className="title">TECHNOLOGIES</h2>
            <div className="details">{technologies}</div>
          </figcaption>
          <div className="project-link-container">
            <a
              className="project-link"
              href={deployment}
              rel="deployment"
              target="__blank noreferrer"
            >
              <figure className="link-figure">
                <Internet className="title-icon internet" />
                <figcaption>Deployed Site</figcaption>
              </figure>
            </a>
            <a
              className="project-link"
              href={repository}
              rel="repository"
              target="__blank noreferrer"
            >
              <figure className="link-figure">
                <GitHub className="title-icon github" />
                <figcaption>Repository</figcaption>
              </figure>
            </a>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Slide;
