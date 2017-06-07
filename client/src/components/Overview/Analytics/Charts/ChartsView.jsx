import React from 'react';
import { connect } from 'react-redux';

import { Data, DataSet } from './chartHelpers';
import chartStyles from './chartStyles.css';

import LargeChart from './LargeChart';
import MediumChart from './MediumChart';
import SmallChart from './SmallChart';

class ChartsView extends React.Component {
  render() {
    const { analytics: { data }} = this.props;
    const { visitors_ios: ios, visitors_android: android } = data;

    const iosTotal = ios.values.reduce((a, b) => a + b);
    const androidTotal = android.values.reduce((a, b) => a + b);
    const iosPercent = (iosTotal / (iosTotal + androidTotal) * 100).toFixed(2);
    const androidPercent = (androidTotal / (iosTotal + androidTotal) * 100).toFixed(2);

    return (
      <div>
        <div className={chartStyles['upper-charts']}>
          <MediumChart
            data={this.getNewVsUniqueData(data)}
            title= "New Customers vs. Returning Customers"
          />
          <SmallChart
            data={this.getDeviceTypeData(data)}
            title="Device Type"
            footerMetrics={[
              { value: iosPercent + '%', label: 'iOS' },
              { value: androidPercent + '%', label: 'Android' }
            ]}
          />
        </div>
        <LargeChart
          data={this.getVisitDurationData(data)}
          title="Customer Visit Duration"
        />
      </div>
    );
  }

  getNewVsUniqueData({ visitors, unique_visits: uniqueVisits }) {
    const newVsUniqueData = new Data({ labels: visitors.units });
    const visitorsDataSet = new DataSet({
      label: visitors.name,
      data: visitors.values,
      backgroundColor: new Array(visitors.values.length).fill('#767676')
    });
    const uniqueVisitsDataSet = new DataSet({
      label: uniqueVisits.name,
      data: uniqueVisits.values
    });

    newVsUniqueData.datasets.push(visitorsDataSet);
    newVsUniqueData.datasets.push(uniqueVisitsDataSet);

    return newVsUniqueData;
  }

  getDeviceTypeData({ visitors_ios: ios, visitors_android: android }) {
    const iosTotal = ios.values.reduce((a, b) => a + b);
    const androidTotal = android.values.reduce((a, b) => a + b);
    const iosPercent = (iosTotal / (iosTotal + androidTotal) * 100).toFixed(2);
    const androidPercent = (androidTotal / (iosTotal + androidTotal) * 100).toFixed(2);

    const deviceDataSet = new DataSet({
      label: 'iOS',
      data: [ iosPercent, androidPercent ],
      backgroundColor: [ '#9b9b9b', '#d6d6d6' ]
    });

    const deviceTypeData = new Data({
      labels: [ 'iOS', 'Android' ],
      datasets: [ deviceDataSet ]
    });

    return deviceTypeData;
  }

  getVisitDurationData({ average_duration: duration }) {
    const durationDataSet = new DataSet({
      label: duration.name,
      data: duration.values,
      borderColor: "#535353",
      borderWidth: 3,
      fill: false
    });

    console.log(durationDataSet);

    const deviceTypeData = new Data({
      labels: duration.units ,
      datasets: [ durationDataSet ]
    });

    return deviceTypeData;
  }
}

export default connect(store => ({
  analytics: store.analytics.analytics
}))(ChartsView);
