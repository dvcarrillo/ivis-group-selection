import * as d3 from 'd3';
/** 
 * Base code retrieved from https://www.d3-graph-gallery.com/graph/heatmap_style.html 
*/

const formatData = (data0) => {
  //Read the data
  const data = [];
  const columns = Object.keys(data0[0]);

  // Main matrix
  for (let i = 0; i < data0.length; i++) {
    for (let j = 1; j < columns.length; j++) {
      data.push({
        group: data0[i]['User'],
        variable: columns[j],
        value: data0[i][columns[j]]
      });
    }
  }
  return data;
}

const heatmapBuilder = (data0, containerEl, setFilteredData) => {
  // set the dimensions and margins of the graph

  const margin = { top: 0, right: 25, bottom: 100, left: 110 },
    width = (window.screen.width * 0.8) - margin.left - margin.right,
    height = width / 2.5 - margin.top - margin.bottom;

  const selected = [];
  const data = formatData(data0);

  // append the svg object to the body of the page
  const svg = d3.select(containerEl)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

  // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
  const myGroups = d3.map(data, function (d) { return d.group; }).keys()
  const myVars = d3.map(data, function (d) { return d.variable; }).keys()

  const rep = d => d.replaceAll(' ', '_');

  // Build X scales and axis:
  const x = d3.scaleBand()
    .range([0, width])
    .domain(myGroups);

  // Append axis legend
  svg.append("g")
    .style("font-size", 12)
    .attr("transform", "translate(0," + height + ")")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0))
    .select(".domain").remove()

  //Rotate axis values
  svg.selectAll('text').attr('transform', 'rotate(-45)')
    .attr("text-anchor", 'end')

  // Build Y scales and axis:
  const y = d3.scaleBand()
    .range([height, 0])
    .domain(myVars);

  // Append axis legend
  svg.append("g")
    .style("font-size", 12)
    .call(d3.axisLeft(y).tickSize(0))
    .select(".domain").remove()

  // Build color scale
  const myColor = (value) => {
    let colorValues = [
      '#004526',
      '#006E3C',
      '#008C51',
      '#00A263',
      '#00B072',
      '#28C98C',
      '#50DDA4',
      '#78ECBB',
      '#A0F7D1',
      '#C8FEE5',
      '#F0FFF8'
    ];

    return colorValues[colorValues.length - 1 - value];
  }

  // Mouse interactions
  const mouseover = function (d) {
    svg.selectAll('rect').style('opacity', 0.25);
    svg.selectAll(`.${rep(d.variable)}`).selectAll('rect').style('opacity', 0.4);
    svg.selectAll(`.${rep(d.group)}`).selectAll('rect').style('opacity', 0.9);
    svg.selectAll(`.${rep(d.group)}`).selectAll('text').style('opacity', 0.9);
    d3.select(this).style('opacity', 1);
    selected.forEach(elem => {
      d3.selectAll(`.${rep(elem)}`).selectAll('rect')
      .style("opacity", 0.9);
      d3.selectAll(`.${rep(elem)}`).selectAll('text')
      .style("opacity", 1);
    });
  }

  const mouseleave = function (d) {
    svg.selectAll('rect').style('opacity', selected.length < 1 ? 1 : 0.25);
    svg.selectAll(`.${rep(d.group)}`).selectAll('text').style('opacity', 0);
    d3.select(this).style("opacity", 1);
    selected.forEach(elem => {
      d3.selectAll(`.${rep(elem)}`).selectAll('rect')
      .style("opacity", 0.9);
      d3.selectAll(`.${rep(elem)}`).selectAll('text')
      .style("opacity", 1);
    });
  }

  const click = function (d) {
    const selectedName = d.group;
    const selectedNameIdx = selected.indexOf(selectedName);
    const isSelected = selectedNameIdx > -1;
    isSelected ? selected.splice(selectedNameIdx, 1) : selected.push(selectedName);

    d3.selectAll(`.${rep(d.group)}`).selectAll('rect')
      .style("opacity", isSelected ? 0.25 : 0.9);
    const data = selected.map(x => data0.find(data => data.User === x));
    setFilteredData(data.length > 0 ? data : data0);
  }

  // Add the squares
  const cells = svg.selectAll()
    .data(data, function (d) { return d.group + ':' + d.variable; })
    .enter()
    .append("g")
    .attr('class', (d) => `${rep(d.variable)} ${rep(d.group)}`)
    .on("click", click)
    .on("mouseover", mouseover)
    .on("mouseleave", mouseleave);

  // Append the square
  cells.append("rect")
    .attr("x", function (d) { return x(d.group) })
    .attr("y", function (d) { return y(d.variable) })
    .attr("width", x.bandwidth())
    .attr("height", y.bandwidth())
    .style("fill", function (d) { return myColor(d.value) })
    .style("stroke-width", 4)
    .style("stroke", "none")
    .style("opacity", 1);

  // Append the legend
  cells.append("text")
    .attr("x", function (d) { return x(d.group) + x.bandwidth() / 2; })
    .attr("y", function (d) { return y(d.variable) + y.bandwidth() / 2; })
    .attr("text-anchor", 'middle')
    .attr("dy", ".35em")
    .style('opacity', 0)
    .style("font-size", "20px")
    .style('fill', 'white')
    .text(function (d) { return d.value; });
};


export default heatmapBuilder;