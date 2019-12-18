import React from "react";
import Profile from "../../images/headshot.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <figure className="profile-figure">
        <img src={Profile} alt="profile" className="profile" />
        <figcaption className="job-title">SOFTWARE ENGINEER</figcaption>
      </figure>
    </div>
  );
};

export default Home;
