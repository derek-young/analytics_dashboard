import React from 'react';
import DatePicker from 'material-ui/DatePicker';

import { updateQueryDates } from '../../../../redux/actions';
import { getDayRange } from './dateParams';
import { dayPicker } from './datePickerStyles';
import { fullMonthDate } from './dateHelpers';

class DayPicker extends React.Component {
  constructor(props) {
    super(props);

    let defaultDate = new Date();

    if (sessionStorage.getItem('dayValue')) {
      defaultDate = new Date(sessionStorage.getItem('dayValue'));
    }

    this.state = {
      date: defaultDate
    };
  }

  componentWillMount() {
    updateQueryDates(getDayRange(this.state.date));
  }

  render() {
    return (
      <DatePicker
        id="day-picker"
        onChange={this.handleChange}
        autoOk={true}
        defaultDate={this.state.date}
        formatDate={fullMonthDate}
        {...dayPicker}
      />
    );
  }

  handleChange = (event, date) => {
    this.setState({ date }, () => {
      sessionStorage.setItem('dayValue', date);
      updateQueryDates(getDayRange(date));
    });
  };

}

export default DayPicker;
