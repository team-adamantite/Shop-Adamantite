import React, { useRef, useEffect } from 'react';
import { select, scaleBand, scaleLinear, max } from 'd3';
import useResizeObserver from '../utils/useResizeObserver';
import rightRoundedRect from '../utils/handleCornersSvg';
import '../../styles/chart.css';

function BarChart({ data }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    const bar = svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'svgGradient') //id of the gradient
      .attr('x1', '0%')
      .attr('x2', '100%')
      .attr('y1', '0%')
      .attr('y2', '100%');
    bar
      .append('stop')
      .attr('offset', '0%')
      .style('stop-color', '#607c8a') // #39c0ed #00b8d8 #82b1ff #607c8a
      .style('stop-opacity', 1);
    bar
      .append('stop')
      .attr('offset', '100%')
      .style('stop-color', '#4391d0') // #1266f1 #007bff #3f51b5 #4391d0 #4267b2
      .style('stop-opacity', 1);

    // sort the data
    // data.sort((a, b) => b.value - a.value);

    const yScale = scaleBand()
      .paddingInner(0.4)
      .domain(data.map((value, index) => index)) // [0,1,2,3,4]
      .range([0, dimensions.height]); // [0, 200]

    const xScale = scaleLinear()
      .domain([0, max(data, (entry) => entry.value)]) // [0, 65]
      .range([0, dimensions.width]); // [0, 400]

    // draw the background bars
    svg
      .selectAll('.bg')
      .data(data, (entry, index) => entry.name)
      .join(
        (enter) =>
          enter
            .append('rect')
            .attr('x', 46)
            .attr('y', (entry, index) => yScale(index))
            .attr('width', dimensions.width / 1.34)
            .attr('height', yScale.bandwidth())
        // .append('path')
        // .attr('d', (entry, index) =>
        //   rightRoundedRect(
        //     44,
        //     yScale(index),
        //     dimensions.width / 1.16,
        //     yScale.bandwidth(),
        //     0
        //   )
        // )
      )
      .attr('class', 'bg')
      .style('fill', '#bebebe')
      .transition()
      .duration(1200)
      .attr('x', 46)
      .attr('y', (entry, index) => yScale(index))
      .attr('width', dimensions.width / 1.34)
      .attr('height', yScale.bandwidth());

    // draw the bars
    svg
      .selectAll('.bar')
      .data(data, (entry, index) => entry.name)
      .join((enter) =>
        enter
          .append('path')
          .attr('d', (entry, index) =>
            rightRoundedRect(
              46,
              yScale(index),
              xScale(entry.value) / 1.35 + 2,
              yScale.bandwidth(),
              5
            )
          )
          .attr('x', (entry) => xScale(entry.value) / 1.35 + 62)
          .attr(
            'y',
            (entry, index) => yScale(index) + yScale.bandwidth() / 2 + 5
          )
          .attr('id', (entry, index) => `bar_${index}`)
      )
      .attr('class', 'bar')
      .style('fill', 'url(#svgGradient)')
      .transition()
      .duration(1200)
      .attr('d', (entry, index) =>
        rightRoundedRect(
          46,
          yScale(index),
          xScale(entry.value) / 1.35 + 2,
          yScale.bandwidth(),
          5
        )
      )
      .attr('x', (entry) => xScale(entry.value) / 1.35 + 62)
      .attr('y', (entry, index) => yScale(index) + yScale.bandwidth() / 2 + 5);

    svg
      .selectAll('.tick')
      .data(data, (entry, index) => entry.name)
      .join((enter) =>
        enter
          .append('text')
          .attr('x', (entry) => xScale(entry.value) / 1.32 + 62)
          .attr(
            'y',
            (entry, index) => yScale(index) + yScale.bandwidth() / 2 + 5
          )
          .style('text-anchor', 'end')
          .style('font-weight', 300)
          .style('opacity', 0)
          .text((entry) => `${entry.value}`)
      )
      .attr('class', 'tick')
      .transition()
      .duration(1200)
      .attr('x', (entry) => xScale(entry.value) / 1.32 + 62)
      .attr('y', (entry, index) => yScale(index) + yScale.bandwidth() / 2 + 5);

    // draw the labels
    svg
      .selectAll('.label')
      .data(data, (entry, index) => entry.name)
      .join((enter) =>
        enter
          .append('text')
          .attr('x', 0)
          .attr(
            'y',
            (entry, index) => yScale(index) + yScale.bandwidth() / 2 + 5
          )
          .style('text-anchor', 'start')
          .style('text-decoration', 'underline')
          .text((entry) => `${entry.name}`)
      )
      .attr('class', 'label')
      .transition()
      .duration(1200)
      .attr('x', 0)
      .attr('y', (entry, index) => yScale(index) + yScale.bandwidth() / 2 + 5);
  }, [data, dimensions]);

  return (
    <div ref={wrapperRef} className='chart__wrapper'>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default BarChart;
