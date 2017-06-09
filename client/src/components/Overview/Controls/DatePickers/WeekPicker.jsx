import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { buildWeeks, fullMonthDate } from './dateHelpers';
import { dropdownStyles } from './datePickerStyles';

class WeekPicker extends React.Component {
  state = {
    value: 0,
    weeks: buildWeeks(),
    testWeeks: [
      { value: 11, text: 'Week 11' },
      { value: 12, text: 'Week 12' },
      { value: 13, text: 'Week 13' }
    ]
  };

  render() {
    return (
      <SelectField
        value={this.state.value}
        onChange={this.handleDropdown}
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

  handleDropdown = (event, index, value) => this.setState({ value });
}

export default WeekPicker;
