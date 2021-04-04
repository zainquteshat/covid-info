import React from "react";
import Case from "./Case/Case";

const Cases = ({ numberTotal, numberDeaths, numberRecovered }) => {
  return (
    <div>
      <Case type="total" numberofCases={numberTotal} />
      <Case type="deaths" numberofCases={numberDeaths} />
      <Case type="recovered" numberofCases={numberRecovered} />
    </div>
  );
};
export default Cases;
