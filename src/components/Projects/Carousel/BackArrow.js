import React from "react";

const BackArrow = props => {
  return (
    <div className="back-arrow arrow" onClick={props.previous}>
      <span class="back-hover">&#8672;</span>
      <span class="back">&#8676;</span>
    </div>
  );
};

export default BackArrow;
