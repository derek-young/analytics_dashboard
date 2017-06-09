import React from 'react';
import DatePicker from 'material-ui/DatePicker';

import { dayPicker } from './datePickerStyles';
import { fullMonthDate } from './dateHelpers';



class DayPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
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
    this.setState({ date });
  };

}

export default DayPicker;
