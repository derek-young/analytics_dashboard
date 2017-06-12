import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { buildWeeks, fullMonthDate } from './dateHelpers';
import { dropdownStyles } from './datePickerStyles';

class WeekPicker extends React.Component {
  state = {
    value: 0,
    weeks: buildWeeks()
  };

  render() {
    return (
      <SelectField
        value={this.state.value}
        onChange={this.handleChange}
        {...dropdownStyles}
      >
        {this.state.weeks.map((week, i) => {
          const { firstDay, lastDay } = week;
          const itemText = fullMonthDate(firstDay) + ' - ' + fullMonthDate(lastDay);
          return <MenuItem key={i} value={i} primaryText={itemText} />
        })}
      </SelectField>
    );
  }

  handleChange = (event, index, value) => this.setState({ value });
}

export default WeekPicker;
