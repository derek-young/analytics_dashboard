import React from 'react';
import { connect } from 'react-redux';

import { Data, DataSet, renderMediumChart } from './charts';
import chartStyles from './chartStyles.css';

class ChartsView extends React.Component {
  componentDidMount() {
    const { analytics: { data }} = this.props;
    const { visitors, unique_visits: uniqueVisits } = data;
    const { name, units, values } = visitors;
    const visitorsData = new Data({ labels: units });
    const visitorsDataSet = new DataSet({
      label: name,
      data: values,
      backgroundColor: new Array(values.length).fill('#767676')
    });

    visitorsData.datasets.push(visitorsDataSet);

    renderMediumChart({ data: visitorsData });
  }

  // data: {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //   datasets: [{
  //     label: '# of Votes',
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(255, 206, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(255, 159, 64, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgba(255,99,132,1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)'
  //     ],
  //     borderWidth: 1
  //   }]
  // },

  render() {
    return (
      <div>
        <div>
          <canvas
            id="medium-chart"
            className={chartStyles['medium-chart']}>
          </canvas>
          <canvas
            id="small-chart"
            className={chartStyles['small-chart']}>
          </canvas>
        </div>
        <div>
          <canvas
            id="large-chart"
            className={chartStyles['large-chart']}>
          </canvas>
        </div>
      </div>
    );
  }
}

export default connect(store => ({
  analytics: store.analytics.analytics
}))(ChartsView);
