import React from 'react';
import Chart from 'chart.js';

import chartStyles from './chartStyles.css';

import DeviceMetric from './DeviceMetric';

class SmallChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: null
    };
  }

  componentDidMount() {
    const { data, type } = this.props;
    this.renderChart(data, type);
  }

  componentWillUnmount() {
    const chart = this.state.chart;
    chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    const chart = this.state.chart;
    const { data, type } = nextProps;

    chart.destroy();
    this.renderChart(data, type);
  };

  render() {
    const { title } = this.props;
    let { footerMetrics } = this.props;
    footerMetrics = footerMetrics || [];

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

  renderChart = (data, type = 'doughnut') => {
    const small = document.getElementById('small-chart');
    const chart = new Chart(small, { type, data });

    this.setState({
      chart
    });
  }
}

export default SmallChart;
