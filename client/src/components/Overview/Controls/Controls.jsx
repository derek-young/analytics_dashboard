import React from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { updateDivision } from '../../../redux/actions';
import controlStyles from './controlStyles.css';
import dropdownStyles from './dropdownStyles';

class Controls extends React.Component {
  state = {
    value: 1
  };

  render() {
    const { division } = this.props;

    return (
      <div className={controlStyles.main}>
        <div className={controlStyles.left}>
          <div
            className={division === 'hour' && controlStyles.selected}
            onClick={() => updateDivision('hour')}>
            Hour
          </div>
          <div
            className={division === 'day' && controlStyles.selected}
            onClick={() => updateDivision('day')}>
            Day
          </div>
          <div
            className={division === 'week' && controlStyles.selected}
            onClick={() => updateDivision('week')}>
            Week
          </div>
          <div
            className={division === 'month' && controlStyles.selected}
            onClick={() => updateDivision('month')}>
            Month
          </div>
        </div>
        <div className={controlStyles.right}>
          <SelectField
            value={this.state.value}
            onChange={this.handleDropdown}
            {...dropdownStyles}
          >
            <MenuItem value={1} primaryText="Auto width" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField>
        </div>
      </div>
    );
  }

  handleDropdown = (event, index, value) => this.setState({ value });
}

export default connect(store => ({
  division: store.analytics.division
}))(Controls);
