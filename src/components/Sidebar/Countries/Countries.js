import React from "react";
import classes from "./Countries.module.scss";

const Countries = ({ countries }) => {
  return (
    <div className={classes.Countries}>
      <label> Select a country: </label>
      <select>
        <option value="all"> All </option>
        {countries.map((country) => {
          return (
            <option key={country.Slug} value={country.Slug}>
              {country.Country}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Countries;
