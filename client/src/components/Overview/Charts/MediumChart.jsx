import React from 'react';
import Chart from 'chart.js';

import chartStyles from './chartStyles.css';

class MediumChart extends React.Component {
  componentDidMount() {
    const medium = document.getElementById("medium-chart");
    const { data, type = 'bar' } = this.props;

    new Chart(medium, {
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

  render() {
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
}

export default MediumChart;
