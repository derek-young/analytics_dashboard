import React from 'react';

import analyticStyles from './analyticStyles.css';

const SingleMetric = ({
  name,
  delta,
  value,
  type,
  icon: Icon,
  iconStyles
}) => (
  <div className={analyticStyles.metric}>
    {console.log(type)}
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
          {delta >= 0
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
        <div className={analyticStyles['data__bottom']}>
          {value}
        </div>
      </div>
    </div>
  </div>
);


export default SingleMetric;
