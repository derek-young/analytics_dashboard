import React from 'react';
import { connect } from 'react-redux';

import { updateDivision } from '../../../redux/actions';
import controlStyles from './controlStyles.css';

import DayPicker from './DatePickers/DayPicker';
import WeekPicker from './DatePickers/WeekPicker';
import MonthPicker from './DatePickers/MonthPicker';
import YearPicker from './DatePickers/YearPicker';

const Controls = ({ division }) => (
  <div className={controlStyles.main}>
    <div className={controlStyles.left}>
      <div
        className={division === 'hour' && controlStyles.selected}
        onClick={() => updateDivision('hour')}>
        Hour
      </div>
      <div
        className={division === 'day' && controlStyles.selected}
        onClick={() => updateDivision('day')}>
        Day
      </div>
      <div
        className={division === 'week' && controlStyles.selected}
        onClick={() => updateDivision('week')}>
        Week
      </div>
      <div
        className={division === 'month' && controlStyles.selected}
        onClick={() => updateDivision('month')}>
        Month
      </div>
    </div>
    <div className={controlStyles.right}>
      {division == 'hour' && <DayPicker />}
      {division == 'day' && <WeekPicker />}
      {division == 'week' && <MonthPicker />}
      {division == 'month' && <YearPicker />}
    </div>
  </div>
);

export default connect(store => ({
  division: store.analytics.division
}))(Controls);
