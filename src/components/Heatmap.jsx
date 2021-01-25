import React, { useLayoutEffect, useRef, useCallback } from 'react';
import * as d3 from 'd3';
import heatmapBuilder from './heatmapBuilder';

const HeatMap = (props) => {
  const containerRef = useRef(null);

  const drawChart = useCallback(heatmapBuilder,[]);

  useLayoutEffect(() => {
    if (containerRef?.current) {
      const children = d3.select(containerRef?.current).selectAll('svg');
      if (children.size() !== 0) {
        d3.select(containerRef?.current).selectAll('svg').remove();
      }
      drawChart(props.userData, containerRef.current);
    }
  }, [drawChart]);

  return <div ref={containerRef} />;
}

export default HeatMap;
