import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { updateQueryDates } from '../../../../redux/actions';
import {
  thisQuarter,
  lastQuarter,
  thisYearToDate,
  lastYear,
  lastYearToDate
} from './dateParams';
import { dropdownStyles } from './datePickerStyles';

class YearPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: Number(sessionStorage.getItem('yearValue')) || 0,
      options: [
        { text: 'This Quarter', action: thisQuarter },
        { text: 'Last Quarter', action: lastQuarter },
        { text: 'This Year-to-date', action: thisYearToDate },
        { text: 'Last Year', action: lastYear },
        { text: 'Last Year-to-date', action: lastYearToDate }
      ]
    };
  }

  componentWillMount() {
    this.updateGlobalState();
  }

  render() {
    return (
      <SelectField
        value={this.state.value}
        onChange={this.handleChange}
        {...dropdownStyles}
      >
        {this.state.options.map((option, i) => {
          return <MenuItem key={i} value={i} primaryText={option.text} />
        })}
      </SelectField>
    );
  }

  handleChange = (event, index, value) => {
    this.setState({ value }, () => {
      sessionStorage.setItem('yearValue', value);
      this.updateGlobalState();
    });
  }

  updateGlobalState = () => {
    const selected = this.state.options[this.state.value];
    const { startDate, endDate } = selected.action();
    
    updateQueryDates({ startDate, endDate });
  }
}

export default YearPicker;
