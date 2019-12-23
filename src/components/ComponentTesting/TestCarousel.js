import React from "react";
import BackArrow from "../Carousel/BackArrow";
import NextArrow from "../Carousel/NextArrow";
import Slide from "../Carousel/Slide";
import Calendar from "../../images/calendar.gif";
import Giphy from "../../images/giphy.gif";
import Simon from "../../images/simon.gif";
import Mock from "../../images/mock.gif";
import "../Carousel/Carousel.css";

class TestCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [Calendar, Giphy, Simon, Mock],
      labels: ["Calendar App", "Giphy Slider UI", "Simon Game", "Mock Site"],
      index: 0,
      translate: 0
    };
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
        <BackArrow previous={this.previous} className="back-component" />
        <div className="carousel">
          <div
            className="carousel-wrapper"
            style={{
              transform: `translateX(${this.state.translate}px)`,
              transition: "transform ease-out 0.4s"
            }}
          >
            {this.state.images.map((image, i) => (
              <Slide key={i} image={image} label={this.state.labels[i]} />
            ))}
          </div>
        </div>
        <NextArrow next={this.next} className="next-component" />
      </div>
    );
  }
}

export default TestCarousel;
