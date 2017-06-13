import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { updateQueryDates } from '../../../../redux/actions';
import { startOfDay, endOfDay } from './dateParams';
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
          const { firstDay, lastDay } = week;
          const itemText = fullMonthDate(firstDay) + ' - ' + fullMonthDate(lastDay);
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
    const { firstDay, lastDay } = selectedWeek;

    updateQueryDates({
      startDate: startOfDay(firstDay),
      endDate: endOfDay(lastDay)
    });
  }
}

export default WeekPicker;
