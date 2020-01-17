import React from "react";
import Logo from "../../images/assets/portfolio-logo.svg";

const SectionOne = () => {
  return (
    <section id="section-one">
      <div className="about-section">
        <div className="about-intro">
          <img src={Logo} className="portfolio-logo" alt="portfolio-logo" />
          <div className="about-summary">
            <div className="speech-arrow"></div>
            <span className="about-description">
              Hello! I'm a full-stack software engineer from Columbia, Maryland.
              I'm an active learner and problem solver who's never afraid of new
              challenges!
            </span>
          </div>
          <div className="profile-figure">
            <div className="caption job-title">
              <span className="dev-name">STEVEN KIM</span>
              <br />
              WEB DEVELOPER
            </div>
          </div>
          <a className="view-container" href="#section-two">
            <div className="view-more">
              <div className="down-arrow down-arrow-top">&#8681;</div>
              <div className="down-arrow down-arrow-bottom">&#8681;</div>
            </div>
            <span>
              View Portfolio
              <div className="underline" />
            </span>
          </a>
        </div>
        <div className="scrollnav-container">
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
      </div>
    </section>
  );
};

export default SectionOne;
