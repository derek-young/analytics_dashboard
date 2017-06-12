import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { buildMonths } from './dateHelpers';
import { dropdownStyles } from './datePickerStyles';

class MonthPicker extends React.Component {
  state = {
    value: 0,
    months: buildMonths()
  };

  render() {
    return (
      <SelectField
        value={this.state.value}
        onChange={this.handleChange}
        {...dropdownStyles}
      >
        {this.state.months.map((month, i) => {
          return <MenuItem key={i} value={i} primaryText={month.fullName} />
        })}
      </SelectField>
    );
  }

  handleChange = (event, index, value) => this.setState({ value });
}

export default MonthPicker;
