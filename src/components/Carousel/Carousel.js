import { React, Component } from "react";
import Slides from "./Slides";
import "./Carousel.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="carousel">
        <div className="arrow arrow-left" />
        <div className="slides-wrapper">
          <Slides></Slides>
        </div>
        <div className="arrow arrow-right" />
      </div>
    );
  }
}

export default Carousel;
