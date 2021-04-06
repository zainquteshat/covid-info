import React from "react";
import Cases from "./Cases/Cases";
import Countries from "./Countries/Countries";
import classes from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={classes.Sidebar}>
      <Countries
        allCountries={["Germany", "Netherlands", "France", "Belgium"]}
      />
      <Cases numberTotal="838642" numberDeaths="1304" numberRecovered="52454" />
    </div>
  );
};
export default Sidebar;
