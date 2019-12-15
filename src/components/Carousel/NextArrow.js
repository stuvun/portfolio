import React from "react";

const NextArrow = props => {
  return (
    <div className="next-arrow arrow" onClick={props.next}>
      <span class="next">&#8677;</span>
      <span class="next-hover">&#8674;</span>
    </div>
  );
};

export default NextArrow;
