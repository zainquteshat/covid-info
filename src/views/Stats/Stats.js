import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Chart from "../../components/Chart/Chart";
import Sidebar from "../../components/Sidebar/Sidebar";
import classes from "./Stats.module.scss";

const Stats = () => {
  let [globalCases, setGlobalCases] = useState([]);
  let [countriesAndCases, setCountriesandCases] = useState([]);

  useEffect(() => {
    // TODO: save data to redux store instead
    // TODO: add spinner
    // TODO: handle error
    axios
      .get("https://api.covid19api.com/summary")
      .then((response) => {
        setGlobalCases(response.data.Global);
        setCountriesandCases(response.data.Countries);
      })
      .catch((error) => console.error("Error:" + error));
  }, []);

  return (
    <div className={classes.Stats}>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={8}>
            <Chart />
          </Grid>
          <Grid item md={4}>
            <Sidebar
              globalCases={globalCases}
              countriesAndCases={countriesAndCases}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Stats;
