import React from 'react';
import { connect } from 'react-redux';
import Group from 'material-ui/svg-icons/social/group';
import Person from 'material-ui/svg-icons/social/person';
import Time from 'material-ui/svg-icons/device/access-time';
import Chat from 'material-ui/svg-icons/action/question-answer';

import analyticStyles from './analyticStyles.css';

import SingleMetric from './SingleMetric';
import DoubleMetric from './DoubleMetric';

const icons = {
  visitors: Group,
  unique_visits: Person,
  average_duration: Time
};

const iconStyles = {
  height: 30,
  width: 30
};

const AnalyticsView = ({ analytics }) => (
  <div className={analyticStyles.main}>
    {analytics.data.map(({ key, name, values, deltas, type }, i) => {
      const value = values.reduce(sum);
      const delta = deltas.reduce(sum);

      return (
        <SingleMetric
          key={i}
          icon={icons[key]}
          {...{ name, value, delta, type, iconStyles }}
        />
      );
    })}
    <DoubleMetric
      icon={Chat}
      iconStyles={iconStyles}
    />
  </div>
);

function sum(a, b) {
  return a + b;
}

export default connect(store => ({
  analytics: store.analytics.analytics
}))(AnalyticsView);
