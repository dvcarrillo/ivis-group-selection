import React, { useLayoutEffect, useRef, useCallback } from 'react';
import * as d3 from 'd3';
import heatmapBuilder from './heatmapBuilder';

const HeatMap = (props) => {
  const containerRef = useRef(null);

  const drawChart = useCallback(heatmapBuilder, []);

  useLayoutEffect(() => {
    if (containerRef?.current) {
      const children = d3.select(containerRef?.current).selectAll('svg');
      if (children.size() !== 0) {
        d3.select(containerRef?.current).selectAll('svg').remove();
      }
      drawChart(props.userData, containerRef.current, props.setFilteredData);
    }
  }, [drawChart, props.setFilteredData, props.userData]);


  // Student's skills
  // Hover over the cells to see the specific skills of the student. Select one cell to add the student to the group list.

  return (
    <>
      <div class="heatmapHead">
        <div class="titleBox">
          <h1>Student's skills</h1>
          <h3>Hover over the cells to see the specific skills of the student. Select one cell to add the student to the group list.</h3>
        </div>
        <div className="keyBox">
          <h5>Key</h5>
          <div className="keyColor"></div>
          <div className="keyLegend">
            <p>Less skilled</p>
            <p>More skilled</p>
          </div>
        </div>
      </div>
      <div ref={containerRef} />
    </>
  );
}

export default HeatMap;
