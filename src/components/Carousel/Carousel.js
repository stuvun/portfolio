import React from "react";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Slide from "./Slide";
import Calendar from "../../images/calendar.gif";
import Giphy from "../../images/giphySlider.gif";
import Mock from "../../images/mock.gif";
import Simon from "../../images/simonExample.gif";
import "./Carousel.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [Calendar, Giphy, Mock, Simon],
      slideIndex: 0,
      slideTranslation: 0
    };
  }

  goToPrevSlide = () => {
    if (this.state.slideIndex === 0) {
      this.setState(prevState => ({
        slideIndex: prevState.slideIndex + (this.state.images.length - 1),
        slideTranslation: prevState.slideTranslation - this.slideWidth() * 3
      }));
      console.log(this.state.images.length);
      console.log(this.state.slideIndex - 1);
    } else {
      this.setState(prevState => ({
        slideIndex: prevState.slideIndex - 1,
        slideTranslation: prevState.slideTranslation + this.slideWidth()
      }));
      console.log(this.state.slideIndex - 1);
    }
  };

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset slideIndex and slideTranslation, so we return
    // to the first image in the array.
    if (this.state.slideIndex === this.state.images.length - 1) {
      return this.setState({
        slideIndex: 0,
        slideTranslation: 0
      });
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      slideIndex: prevState.slideIndex + 1,
      slideTranslation: prevState.slideTranslation + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.slideTranslation}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />

        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}

export default Carousel;
