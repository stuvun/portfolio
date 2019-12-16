import React from "react";
import Profile from "../../images/headshot.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <img src={Profile} alt="profile" className="profile" />
    </div>
  );
};

export default Home;
