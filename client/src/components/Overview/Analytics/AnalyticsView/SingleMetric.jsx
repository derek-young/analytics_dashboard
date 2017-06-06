import React from 'react';

import analyticStyles from './analyticStyles.css';

const SingleMetric = ({ name, deltas, values, type, icons }) => {
  const icon = icons[type];

  return (
    <div className={analyticStyles.metric}>
      {name}
    </div>
  );
};


export default SingleMetric;
