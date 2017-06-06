import React from 'react';
import { connect } from 'react-redux';
import Group from 'material-ui/svg-icons/social/group';
import Person from 'material-ui/svg-icons/social/person';
import Time from 'material-ui/svg-icons/device/access-time';
import Chat from 'material-ui/svg-icons/action/question-answer';

import SingleMetric from './SingleMetric';
import DoubleMetric from './DoubleMetric';

const icons = {
  visitors: Group,
  unique_visits: Person,
  average_duration: Time
};

const AnalyticsView = ({ analytics }) => (
  <div>
    {analytics.data.map((metric, i) => (
      <SingleMetric key={i} icons={icons} {...metric} />
    ))}
      <DoubleMetric

      />
  </div>
);

export default connect(store => ({
  analytics: store.analytics.analytics
}))(AnalyticsView);
