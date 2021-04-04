import React from "react";

const Countries = ({ allCountries }) => {
  return (
    <div>
      <p>Choose a country:</p>
      <select>
        {allCountries.map((country, index) => {
          return <option key={index}>{country}</option>;
        })}
      </select>
    </div>
  );
};
export default Countries;
