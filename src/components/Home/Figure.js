import React from "react";
import { ReactComponent as JavaScript } from "../../images/javascript.svg";
import { ReactComponent as HTML } from "../../images/html.svg";
import { ReactComponent as CSS } from "../../images/css.svg";
import { ReactComponent as ReactJS } from "../../images/react.svg";
import { ReactComponent as LinkedIn } from "../../images/linkedin.svg";
import { ReactComponent as GitHub } from "../../images/github.svg";
import { ReactComponent as Postgres } from "../../images/postgres.svg";
import { ReactComponent as Mongodb } from "../../images/mongodb.svg";
import { ReactComponent as Agile } from "../../images/agile.svg";

const figureList = [
  JavaScript,
  HTML,
  CSS,
  ReactJS,
  LinkedIn,
  GitHub,
  Postgres,
  Mongodb,
  Agile
];

figureList.map((figure, index) => {
  return (
    <div className="figure-container">
      <figure>
        {figure}
        <figcaption className="icon"></figcaption>
      </figure>
    </div>
  );
});

const Figure = () => {
  return <div className="figure-container"></div>;
};

export default Figure;
