import React from 'react';
import { connect } from 'react-redux';

import { updateDivision } from '../../../redux/actions';
import controlStyles from './controlStyles.css';

import DayPicker from './DatePickers/DayPicker';
import WeekPicker from './DatePickers/WeekPicker';
import MonthPicker from './DatePickers/MonthPicker';
import YearPicker from './DatePickers/YearPicker';

class Controls extends React.Component {
  render() {
    const { division } = this.props;

    return (
      <div className={controlStyles.main}>
        <div className={controlStyles.left}>
          <div
            className={division === 'hour' && controlStyles.selected}
            onClick={() => this.handleChange('hour')}>
            Hour
          </div>
          <div
            className={division === 'day' && controlStyles.selected}
            onClick={() => this.handleChange('day')}>
            Day
          </div>
          <div
            className={division === 'week' && controlStyles.selected}
            onClick={() => this.handleChange('week')}>
            Week
          </div>
          <div
            className={division === 'month' && controlStyles.selected}
            onClick={() => this.handleChange('month')}>
            Month
          </div>
        </div>
        <div className={controlStyles.right}>
          {division == 'hour' && <DayPicker division={division} />}
          {division == 'day' && <WeekPicker division={division} />}
          {division == 'week' && <MonthPicker division={division} />}
          {division == 'month' && <YearPicker division={division} />}
        </div>
      </div>
    );
  }

  handleChange = (value) => {
    updateDivision(value);
  }
}

export default connect(store => ({
  division: store.analytics.query.division
}))(Controls);
