import { BaseChart, d3 } from '@politico/graphics-kit';
import { hexbin as d3Hexbin } from 'd3-hexbin';

const parsePx = (px) => parseFloat(px.replace('px', ''));

const getExclusion = () => {
  const textBox = document.querySelector('.center-box');
  const { width, height, top, x } = textBox.getBoundingClientRect();
  const {
    paddingTop,
    paddingBottom,
  } = window.getComputedStyle(textBox);

  const topBuffer = parsePx(paddingTop);
  const bottomBuffer = parsePx(paddingBottom);
  return {
    x: [x - 20, x + width + 20],
    y: [top + topBuffer - 20, top + height - bottomBuffer + 20],
  };
};

class Chart extends BaseChart {
  draw() {
    const node = this.selection().node();
    const { width, height } = node.getBoundingClientRect();

    const hexbin = d3Hexbin()
      .x(d => d.x)
      .y(d => d.y)
      .radius(10)
      .size([width, height]);

    const t = d3.transition()
      .duration(750);

    const random = (max) => () => Math.floor(Math.random() * Math.floor(max));
    const randomX = random(width);
    const randomY = random(height);
    const randomNoiseX = random(width / 10);
    const dampenerScale = d3.scaleLinear()
      .domain([0, width])
      .range([10, 2]);

    const randomNoiseY = (x) => {
      const dampener = dampenerScale(x);
      return random(height / dampener)();
    };

    const randomRadius = random(width < 600 ? 5 : 10);
    const randomSample = () => random(width < 600 ? 20 : 80)() + 20;

    const gravityScale = d3.scaleLinear()
      .domain([0, width / 2])
      .range([height / 4, 0]);
    const linear = d3.scaleLinear()
      .domain([0, width])
      .range([0, height]);
    const invertY = d3.scaleLinear()
      .domain([0, height])
      .range([height, 0]);

    const N = randomSample();
    const xSpan = width / N;
    const denseData = d3.range(0, N).map((d, i) => {
      const span = xSpan * i;
      return ({
        x: span + randomNoiseX(),
        y: invertY(linear(span) + randomNoiseY(span) - gravityScale(Math.abs(span - (width / 2)))),
      });
    });

    const looseData = d3.range(0, 10).map(() => ({
      x: randomX(),
      y: randomY(),
    }));

    const g = this.selection()
      .appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width)
      .attr('height', height)
      .appendSelect('g');

    const exclusionZone = getExclusion();
    const testExcluded = (d) => (
      d.x > exclusionZone.x[0] &&
      d.x < exclusionZone.x[1]
    ) && (
      d.y > exclusionZone.y[0] &&
      d.y < exclusionZone.y[1]
    );

    const denseBins = g.selectAll('.dense-bins')
      .data(hexbin(denseData), d => `x${d.x}y${d.y}`);

    denseBins.enter().append('path')
      .attr('class', (d, i) => `dense-bins node-${i}`)
      .style('fill', 'rgba(255, 255, 255, 0.1)')
      .style('stroke', () => Math.random() > 0.1 ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255,255,255,0.5)')
      .style('opacity', 0)
      .merge(denseBins)
      .transition(t)
      .attr('d', d => `M${d.x},${d.y}${hexbin.hexagon(randomRadius() + 10)}`)
      .delay((d, i) => i * (4000 / denseData.length))
      .style('opacity', d => testExcluded(d) ? 0 : 1);

    denseBins.exit()
      .transition(t)
      .delay((d, i) => i * (3000 / denseData.length))
      .style('opacity', 0)
      .remove();

    const looseBins = g.selectAll('.loose-bins')
      .data(hexbin(looseData), d => `x${d.x}y${d.y}`);

    looseBins.enter().append('path')
      .attr('class', 'loose-bins')
      .style('fill', 'rgba(255, 255, 255, 0.1)')
      .style('stroke', 'rgba(255, 255, 255, 0.25)')
      .style('opacity', 0)
      .merge(looseBins)
      .transition(t)
      .attr('d', d => `M${d.x},${d.y}${hexbin.hexagon(randomRadius() + 10)}`)
      .delay((d, i) => i * (4000 / looseData.length))
      .style('opacity', d => testExcluded(d) ? 0 : 1);

    looseBins.exit()
      .transition(t)
      .delay((d, i) => i * (3000 / looseData.length))
      .style('opacity', 0)
      .remove();

    return this;
  }
}
export default Chart;
