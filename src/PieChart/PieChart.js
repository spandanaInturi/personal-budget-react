import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import axios from "axios";

function PieChart(props) {
  const [data, setdata] = useState([]);
  const {
       outerRadius = 200, 
       innerRadius = 100 } = props;

  const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };

  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;

  const colorScale = d3
    .scaleSequential()
    .interpolator(d3.interpolateWarm)
    .domain([0, data.length]);

  useEffect(() => {
    if(data.length === 0){
      axios.get("http://localhost:5000/budget").then((res) => {
        var data = res.data.myBudget;
        setdata(data);
      });
    }
  
    if (data.length > 0) {
      drawChart();
    }
  });

  function drawChart() {
    console.log(data);
    d3.select("#pie-container").select("svg").remove();

    const svg = d3
      .select("#pie-container")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g");
    svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const arcGenerator = d3
      .arc()
      .innerRadius(100)
      .outerRadius(200);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.budget);

    const arc = svg.selectAll().data(pieGenerator(data)).enter();

    arc
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", (_, i) => colorScale(i))
      .style("stroke", "#ffffff")
      .style("stroke-width", 0);

    arc
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text((d) => d.data.title)
      .style("fill", "white")
      .attr("transform", (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      });
  }

  return <div id="pie-container" />;
}

export default PieChart;