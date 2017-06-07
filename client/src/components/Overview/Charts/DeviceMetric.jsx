import React from 'react';

import chartStyles from './chartStyles.css';

const DeviceMetric = ({ value, label }) => (
  <div className={chartStyles['device-metric']}>
    <div>
      <p className={chartStyles['metric-value']}>
        {value}
      </p>
      <p className={chartStyles['metric-label']}>
        {label}
      </p>
    </div>
  </div>
);

export default DeviceMetric;
