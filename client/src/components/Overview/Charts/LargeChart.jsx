import React from 'react';
import Chart from 'chart.js';

import chartStyles from './chartStyles.css';

import DeviceMetric from './DeviceMetric';

class LargeChart extends React.Component {
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

  renderChart = (data, type = 'line') => {
    const large = document.getElementById('large-chart');
    const chart = new Chart(large, { type, data });

    this.setState({
      chart
    });
  }
}

export default LargeChart;
