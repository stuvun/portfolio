import React from "react";

const Skill = ({ skill, name }) => {
  return (
    <figure className="figure">
      {skill}
      <figcaption className="caption">{name}</figcaption>
    </figure>
  );
};

export default Skill;
