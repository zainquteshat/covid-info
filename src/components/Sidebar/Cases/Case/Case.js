import React from "react";
import classes from "./Case.module.scss";

const Case = ({ type, numberofCases }) => {
  return (
    // TODO: assign different colors to different types
    <div className={[classes.Case, type].join(" ")}>
      <h3>{type}:</h3>
      <p>{numberofCases}</p>
    </div>
  );
};

export default Case;
