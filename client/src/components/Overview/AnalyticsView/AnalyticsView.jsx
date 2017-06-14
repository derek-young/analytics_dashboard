import React from 'react';
import { connect } from 'react-redux';
import Group from 'material-ui/svg-icons/social/group';
import Person from 'material-ui/svg-icons/social/person';
import Time from 'material-ui/svg-icons/device/access-time';
import Chat from 'material-ui/svg-icons/action/question-answer';

import analyticStyles from './analyticStyles.css';

import SingleMetric from './SingleMetric';
import DoubleMetric from './DoubleMetric';

const iconStyles = {
  height: 30,
  width: 30
};

const AnalyticsView = ({ analytics }) => {
  const {
    visitors = {},
    unique_visits: uniqueVisits = {},
    visitors_ios: ios = {},
    visitors_android: android = {},
    average_duration: duration = {}
  } = analytics.data;

  visitors.icon = Group;
  uniqueVisits.icon = Person;
  duration.icon = Time;

  const singleMetrics = [ visitors, uniqueVisits, duration ];

  return (
    <div className={analyticStyles.main}>
      {singleMetrics.map((metric, i) => {
        const value = metric.values ? metric.values.reduce(sum) : '';
        const avg = metric.values ? value / metric.values.length : '';
        const delta = metric.deltas ? metric.deltas.reduce(sum) : false;

        return (
          <SingleMetric
            key={i}
            value={value}
            delta={delta}
            average={avg}
            iconStyles={iconStyles}
            {...metric}
          />
        );
      })}
      <DoubleMetric
        metric1={{
          label: ios.name,
          value: ios.values ? ios.values.reduce(sum) : ''
        }}
        metric2={{
          label: android.name,
          value: android.values ? android.values.reduce(sum) : ''
        }}
        icon={Chat}
        iconStyles={iconStyles}
      />
    </div>
  );
};

function sum(a, b) {
  return a + b;
}

export default connect(store => ({
  analytics: store.analytics.analytics
}))(AnalyticsView);
