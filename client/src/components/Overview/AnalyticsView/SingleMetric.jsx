import React from 'react';

import analyticStyles from './analyticStyles.css';

const SingleMetric = ({
  name,
  delta,
  value,
  type,
  average,
  icon: Icon,
  iconStyles
}) => (
  <div className={analyticStyles.metric}>
    <div className={analyticStyles.icon}>
      <Icon style={iconStyles} />
    </div>
    <div className={analyticStyles.data}>
      <div>
        <div className={analyticStyles['data__top']}>
          <span className={analyticStyles['data__title']}>
            {name}
          </span>
          &nbsp;
          { delta &&
            delta >= 0
            ?
            <span className={analyticStyles['data__delta-positive']}>
              +{delta}
            </span>
            :
            <span className={analyticStyles['data__delta-negative']}>
              {delta}
            </span>
          }
        </div>
        {
          type === 'minutes'
          ?
          <div className={analyticStyles['data__bottom-small']}>
            {average.toFixed(2) + ' mins'}
          </div>
          :
          <div className={analyticStyles['data__bottom-large']}>
            {value.toLocaleString()}
          </div>
        }
      </div>
    </div>
  </div>
);

export default SingleMetric;
