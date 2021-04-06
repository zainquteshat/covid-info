import React from "react";
import Case from "./Case/Case";
import classes from "./Cases.module.scss";

const Cases = ({ numberTotal, numberDeaths, numberRecovered }) => {
  return (
    <div className={classes.Cases}>
      <Case type="total" numberofCases={numberTotal} />
      <Case type="deaths" numberofCases={numberDeaths} />
      <Case type="recovered" numberofCases={numberRecovered} />
    </div>
  );
};
export default Cases;
