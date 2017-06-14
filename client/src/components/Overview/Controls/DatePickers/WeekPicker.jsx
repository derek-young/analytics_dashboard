import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { updateQueryDates } from '../../../../redux/actions';
import { buildWeeks, fullMonthDate } from './dateHelpers';
import { dropdownStyles } from './datePickerStyles';

class WeekPicker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: Number(sessionStorage.getItem('weekValue')) || 0,
      weeks: buildWeeks()
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
        {this.state.weeks.map((week, i) => {
          const { startDate, endDate } = week;
          const itemText =
            fullMonthDate(new Date(startDate))
            + ' - '
            + fullMonthDate(new Date(endDate));

          return <MenuItem key={i} value={i} primaryText={itemText} />
        })}
      </SelectField>
    );
  }

  handleChange = (event, index, value) => {
    this.setState({ value }, () => {
      sessionStorage.setItem('weekValue', value);
      this.updateGlobalState();
    });
  }

  updateGlobalState = () => {
    const selectedWeek = this.state.weeks[this.state.value];
    const { startDate, endDate } = selectedWeek;

    updateQueryDates({ startDate, endDate });
  }
}

export default WeekPicker;
