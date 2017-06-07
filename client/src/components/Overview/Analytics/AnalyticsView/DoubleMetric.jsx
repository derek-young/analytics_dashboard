import React from 'react';

import analyticStyles from './analyticStyles.css';

const DoubleMetric = ({ metric1, metric2, icon: Icon, iconStyles }) => (
  <div className={analyticStyles['double-metric']}>
    <div className={analyticStyles.icon}>
      <Icon style={iconStyles} />
    </div>
    <div className={analyticStyles['double-data']}>
      <div>
        <div className={analyticStyles.metric1}>
          <div>
            <div className={analyticStyles.data__title}>
              {metric1.label}
            </div>
            <div className={analyticStyles['data__bottom-small']}>
              {metric1.value}
            </div>
          </div>
        </div>
        <div className={analyticStyles.metric2}>
          <div>
            <div className={analyticStyles.data__title}>
              {metric2.label}
            </div>
            <div className={analyticStyles['data__bottom-small']}>
              {metric2.value}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DoubleMetric;
