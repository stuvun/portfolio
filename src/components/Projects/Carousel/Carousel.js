import React from "react";
import BackArrow from "./BackArrow";
import NextArrow from "./NextArrow";
import Slide from "./Slide";
import {
  CalendarGif,
  SimonGif,
  GiphyGif,
  MockGif
} from "../../../images/index.js";
import ProjectData from "../../../Data/ProjectData.json";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [CalendarGif, SimonGif, GiphyGif, MockGif],
      index: 0,
      translate: 0
    };
    this.ProjectData = ProjectData;
  }

  previous = () => {
    if (this.state.index === 0) {
      this.setState(state => ({
        index: state.index + (this.state.images.length - 1),
        translate:
          state.translate - this.slideWidth() * (this.state.images.length - 1)
      }));
    } else {
      this.setState(state => ({
        index: state.index - 1,
        translate: state.translate + this.slideWidth()
      }));
    }
  };

  next = () => {
    if (this.state.index === this.state.images.length - 1) {
      return this.setState({
        index: 0,
        translate: 0
      });
    }
    this.setState(state => ({
      index: state.index + 1,
      translate: state.translate - this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="carousel-container">
        <div className="arrow-container">
          <BackArrow previous={this.previous} className="back-component" />
          <NextArrow next={this.next} className="next-component" />
        </div>
        <div className="carousel">
          <div
            className="carousel-wrapper"
            style={{
              transform: `translateX(${this.state.translate}px)`,
              transition: "transform ease-out 0.4s"
            }}
          >
            {this.state.images.map((image, i) => (
              <Slide
                key={i}
                image={image}
                name={ProjectData[i].name}
                technologies={ProjectData[i].technologies}
                description={ProjectData[i].description}
                deployment={ProjectData[i].deployment}
                repository={ProjectData[i].repository}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
