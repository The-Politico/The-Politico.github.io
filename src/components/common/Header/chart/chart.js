import { BaseChart, d3 } from '@politico/graphics-kit';
import { hexbin as d3Hexbin } from 'd3-hexbin';

class Chart extends BaseChart {
  draw() {
    const node = this.selection().node();
    const { width, height } = node.getBoundingClientRect();

    const hexbin = d3Hexbin()
      .x(d => d.x)
      .y(d => d.y)
      .radius(10)
      .size([width - 40, height]);

    const t = d3.transition()
      .duration(750);

    const random = (max) => () => Math.floor(Math.random() * Math.floor(max));
    const randomX = random(width - 40);
    const randomY = random(height);

    const randomRadius = random(10);
    const randomSample = () => random(10)() + 1;

    const N = randomSample();

    const looseData = d3.range(0, N).map(() => ({
      x: randomX(),
      y: randomY(),
    }));

    const g = this.selection()
      .appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width)
      .attr('height', height)
      .appendSelect('g')
      .attr('transform', 'translate(20, 0)');

    const looseBins = g.selectAll('.loose-bins')
      .data(hexbin(looseData), d => `x${d.x}y${d.y}`);

    looseBins.enter().append('path')
      .attr('class', 'loose-bins')
      .style('fill', 'rgba(255, 255, 255, 0.1)')
      .style('stroke', () => Math.random() > 0.1 ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255,255,255,0.5)')
      .style('opacity', 0)
      .merge(looseBins)
      .transition(t)
      .attr('d', d => `M${d.x},${d.y}${hexbin.hexagon(randomRadius() + 5)}`)
      .delay((d, i) => i * (4000 / looseData.length))
      .style('opacity', 1);

    looseBins.exit()
      .transition(t)
      .delay((d, i) => i * (3000 / looseData.length))
      .style('opacity', 0)
      .remove();

    return this;
  }
}
export default Chart;
