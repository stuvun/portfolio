import React from "react";

const BackArrow = props => {
  return (
    <div className="back-arrow arrow" onClick={props.previous}>
      <span class="back">&#8672;&#8676;</span>
    </div>
  );
};

export default BackArrow;
