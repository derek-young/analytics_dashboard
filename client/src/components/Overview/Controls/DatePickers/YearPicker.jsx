import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { dropdownStyles } from './datePickerStyles';

class YearPicker extends React.Component {
  state = {
    value: 1
  };

  render() {
    return (
      <SelectField
        value={this.state.value}
        onChange={this.handleDropdown}
        {...dropdownStyles}
      >
        <MenuItem value={1} primaryText="Year 1" />
        <MenuItem value={2} primaryText="Year 2" />
        <MenuItem value={3} primaryText="Year 3" />
      </SelectField>
    );
  }

  handleDropdown = (event, index, value) => this.setState({ value });
}

export default YearPicker;
