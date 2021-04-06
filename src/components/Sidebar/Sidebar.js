import React from "react";
import Cases from "./Cases/Cases";
import Countries from "./Countries/Countries";
import classes from "./Sidebar.module.scss";

const Sidebar = ({ globalCases, countriesAndCases }) => {
  const { TotalConfirmed, NewDeaths, TotalRecovered } = globalCases;
  return (
    <div className={classes.Sidebar}>
      <Countries countriesAndCases={countriesAndCases} />
      <Cases
        numberTotal={TotalConfirmed}
        numberDeaths={NewDeaths}
        numberRecovered={TotalRecovered}
      />
    </div>
  );
};
export default Sidebar;
