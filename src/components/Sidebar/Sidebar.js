import React from "react";
import Cases from "./Cases/Cases";
import Countries from "./Countries/Countries";
import classes from "./Sidebar.module.scss";

const Sidebar = ({ countries, globalCases }) => {
  const { TotalConfirmed, TotalDeaths, TotalRecovered } = globalCases;
  return (
    <div className={classes.Sidebar}>
      <Countries countries={countries} />
      <Cases
        numberTotal={TotalConfirmed}
        numberDeaths={TotalDeaths}
        numberRecovered={TotalRecovered}
      />
    </div>
  );
};
export default Sidebar;
