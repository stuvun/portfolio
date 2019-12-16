import React from "react";

const Slide = ({ image, label }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  };
  return (
    <div className="slide" style={styles}>
      {label}
    </div>
  );
};

export default Slide;
