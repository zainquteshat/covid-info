import React from "react";
import classes from "./Countries.module.scss";

const Countries = ({ countriesAndCases }) => {
  return (
    <div className={classes.Countries}>
      <label> Select a country: </label>
      <select>
        <option value="all"> All </option>
        {countriesAndCases.map((countryData) => {
          return (
            <option key={countryData.ID} value={countryData.ID}>
              {countryData.Country}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Countries;
