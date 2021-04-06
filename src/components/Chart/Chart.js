import classes from "./Chart.module.scss";
import React from "react";
import { Chart } from "react-google-charts";

const CoronaChart = () => {
  return (
    <div className={classes.Chart}>
      <Chart
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["x", "dogs", "cats", "monkeys"],
          [0, 0, 0, 3],
          [1, 10, 5, 2],
          [2, 23, 15, 23],
          [3, 17, 9, 33],
          [4, 18, 10, 33],
          [5, 9, 5, 42],
          [6, 11, 3, 42],
          [7, 27, 19, 3],
        ]}
        options={{
          hAxis: {
            title: "Time",
          },
          vAxis: {
            title: "Popularity",
          },
          series: {
            1: { curveType: "function" },
          },
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
};

export default CoronaChart;
