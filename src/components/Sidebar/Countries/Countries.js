import React from "react";
import classes from "./Countries.module.scss";

const Countries = ({ allCountries }) => {
  return (
    <div className={classes.Countries}>
      <label> Select a country: </label>
      <select>
        {allCountries.map((country, index) => {
          return (
            <option key={index} value={country}>
              {country}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Countries;
