import React from 'react';
import Chart from './chart';

class ChartContainer extends React.Component {
  chartContainer = React.createRef()
  chart = new Chart()
  componentDidMount() {
    setTimeout(this.initChart, 100);
  }
  componentWillUnmount() {
    this.cancelChart();
  }

  cancelChart = () => {
    clearInterval(this.interval);
  }

  initChart = () => {
    this.chart
      .selection(this.chartContainer.current)
      .draw();

    this.interval = setInterval(() => this.chart.draw(), 5000);

    setTimeout(this.cancelChart, 30000);
  }
  render() {
    return (
      <div id='chart' ref={this.chartContainer} />
    );
  }
}
export default ChartContainer;
