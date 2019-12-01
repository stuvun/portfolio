import React, { Component } from "react";
import "./Home.css";
import Calendar from "../images/calendarPreview.png";
import Giphy from "../images/giphySlider.gif";
import Simon from "../images/simonExample.gif";
import Mock from "../images/mockExample.gif";

class Home extends Component {
    render() {
        return (
            <div className="projectContainer">
                <div className="calendarContainer">
                    <h3>Calendar App</h3>
                    <img className="calendar" src={Calendar}/>
                </div>
                <div className="giphyContainer">
                    <h3>Giphy Slider UI</h3>
                    <img className="giphy" src={Giphy}/>
                </div>
                <div className="simonContainer">
                    <h3>Simon Game</h3>
                    <img className="simon" src={Simon}/>
                </div>
                <div className="mockContainer">
                    <h3>Mock Site</h3>
                    <img className="mock" src={Mock}/>
                </div>
                <div className="storyContainer">
                    <h3>Component Library</h3>
                    <img className="story" src={Giphy}/>
                </div>
            </div>
        )
    }
}

export default Home;