import React from "react";
import "./ComponentTesting.css";
import TestCarousel from "./TestCarousel";

class ComponentTesting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <TestCarousel />
      </div>
    );
  }
}

export default ComponentTesting;
