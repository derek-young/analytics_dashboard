import React from 'react';
import Chart from 'chart.js';

import chartStyles from './chartStyles.css';

class MediumChart extends React.Component {
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
    return (
      <div className={chartStyles['medium-chart']}>
        <div className={chartStyles['chart-heading']}>
          {title}
        </div>
        <div className={chartStyles['medium-chart-canvas']}>
          <canvas id="medium-chart"></canvas>
        </div>
      </div>
    );
  }

  renderChart = (data, type = 'bar') => {
    const medium = document.getElementById('medium-chart');
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

    this.setState({
      chart
    });
  }
}

export default MediumChart;
