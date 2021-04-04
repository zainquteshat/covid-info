import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Chart from "../../components/Chart/Chart";
import Sidebar from "../../components/Sidebar/Sidebar";
import classes from "./Stats.module.scss";

const Stats = () => {
  return (
    <div className={classes.Stats}>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={8}>
            <Chart />
          </Grid>
          <Grid item md={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Stats;
