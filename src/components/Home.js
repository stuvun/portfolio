import React, { Component } from "react";
import "./Home.css";
import headshot from "../images/headshot.jpg";

class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <img src={headshot} className="headshot"/>
            </div>
        )
    }
}

export default Home;