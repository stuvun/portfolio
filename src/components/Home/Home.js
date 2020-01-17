import React from "react";
import { Profile, Email, PDF } from "../../images/index";
import { ReactComponent as LinkedIn } from "../../images/links/linkedin.svg";
import { ReactComponent as GitHub } from "../../images/links/github.svg";
import Resume from "../../images/links/resume.pdf";
import "./Home.css";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import { ReactComponent as DividerTwo } from "../../images/assets/divider-two.svg";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const defaultLinkProps = {
      rel: "noopener noreferrer",
      target: "_blank",
      className: "icon-link"
    };
    return (
      <div className="home-container">
        <SectionOne />
        <SectionTwo />
        <section id="section-three">
          <DividerTwo className="section-divider" />
          <div className="profile-container">
            <div className="icon-container">
              <a
                href="https://www.linkedin.com/in/steven-kim-194202197/"
                {...defaultLinkProps}
              >
                <LinkedIn className="title-icon linkedin" />
              </a>
              <a href="https://github.com/stuvun" {...defaultLinkProps}>
                <GitHub className="title-icon github" />
              </a>
            </div>
            <a href={Resume} {...defaultLinkProps} className="resume-container">
              <img src={PDF} alt="resume-pdf" className="resume-pdf" />
              <span>
                View Resume
                <div className="underline" />
              </span>
            </a>
            <img src={Profile} alt="profile" className="profile" />
            <a
              href="sskim14@gmail.com"
              {...defaultLinkProps}
              className="contact-container"
            >
              <img src={Email} alt="email" className="email" />
              <span>
                sskim14@gmail.com
                <div className="underline" />
              </span>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
