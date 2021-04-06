import React from "react";
import classes from "./Case.module.scss";

const Case = ({ type, numberofCases }) => {
  let classesApplied;
  switch (type) {
    case "total":
      classesApplied = "Total";
      break;
    case "deaths":
      classesApplied = "Deaths";
      break;
    case "recovered":
      classesApplied = "Recovered";
      break;
    default:
      classesApplied = "";
  }
  return (
    <div className={classes.Case}>
      <h3 className={classes[classesApplied]}>{type}:</h3>
      <b className={classes.NumberOfCases}>{numberofCases}</b>
    </div>
  );
};

export default Case;
