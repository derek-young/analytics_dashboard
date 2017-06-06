import React from 'react';

import analyticStyles from './analyticStyles.css';

const DoubleMetric = ({ icon: Icon, iconStyles }) => (
  <div className={analyticStyles.metric}>
    <div className={analyticStyles.icon}>
      <Icon style={iconStyles} />
    </div>
    <div className={analyticStyles.data}>
      
    </div>
  </div>
);

export default DoubleMetric;
