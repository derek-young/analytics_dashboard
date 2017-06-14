import React from 'react';
import Chart from 'chart.js';

import chartStyles from './chartStyles.css';

class MediumChart extends React.Component {
  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  render() {
    console.log(this.props.data);
    const { title } = this.props;
    return (
      <div>
        <div className={chartStyles['chart-heading']}>
          {title}
        </div>
        <div className={chartStyles['medium-chart-canvas']}>
          <canvas id="medium-chart"></canvas>
        </div>
      </div>
    );
  }

  renderChart = () => {
    const medium = document.getElementById('medium-chart');
    const { data, type = 'bar' } = this.props;

    const chart = new Chart(medium, {
      type,
      data,
      options: {
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true }]
        }
      }
    });
  }
}

export default MediumChart;
