import React from 'react';
import Chart from 'chart.js';

import chartStyles from './chartStyles.css';

import DeviceMetric from './DeviceMetric';

class LargeChart extends React.Component {
  componentDidMount() {
    const large = document.getElementById('large-chart');
    const { data, type = 'line' } = this.props;

    new Chart(large, { type, data });
  }

  render() {
    return (
      <div>
        <div className={chartStyles['chart-heading']}>
          {this.props.title}
        </div>
        <div className={chartStyles['large-chart-canvas']}>
          <canvas id="large-chart"></canvas>
        </div>
      </div>
    );
  }
}

export default LargeChart;
