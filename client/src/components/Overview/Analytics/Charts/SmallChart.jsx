import React from 'react';
import Chart from 'chart.js';

import chartStyles from './chartStyles.css';

import DeviceMetric from './DeviceMetric';

class SmallChart extends React.Component {
  componentDidMount() {
    const small = document.getElementById('small-chart');
    const { data, type = 'doughnut' } = this.props;
    new Chart(small, { type, data });
  }

  render() {
    const { title, footerMetrics = [] } = this.props;
    return (
      <div>
        <div className={chartStyles['chart-heading']}>
          {title}
        </div>
        <div className={chartStyles['small-chart-canvas']}>
          <canvas id="small-chart"></canvas>
        </div>
        <div className={chartStyles['chart-footer']}>
          {footerMetrics.map((metric, i) => (
            <DeviceMetric key={i} value={metric.value} label={metric.label} />
          ))}
        </div>
      </div>
    );
  }
}

export default SmallChart;
