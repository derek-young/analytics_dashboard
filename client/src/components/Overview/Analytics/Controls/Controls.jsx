import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import controlStyles from './controlStyles.css';

const dropdownStyles = {
  style: {
    width: 270,
    height: 32,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#bcbcbc',
    maxHeight: 200,
    backgroundColor: '#f8f8f8',
    display: 'block',
    paddingLeft: 15
  },
  listStyle: {
    backgroundColor: '#f8f8f8',
  },
  labelStyle: {
    height: 40,
    lineHeight: '40px'
  },
  iconStyle: {
    height: 0,
    padding: 3
  },
  underlineStyle: {
    border: 'none'
  }
}

class Controls extends React.Component {
  state = {
    value: 1,
    division: 'hourly'
  };

  render() {
    const { division } = this.state;

    return (
      <div className={controlStyles.main}>
        <div className={controlStyles.left}>
          <div
            className={division === 'hourly' && controlStyles.selected}
            onClick={this.handleDivision.bind(this, 'hourly')}>
            Hourly
          </div>
          <div
            className={division === 'day' && controlStyles.selected}
            onClick={this.handleDivision.bind(this, 'day')}>
            Day
          </div>
          <div
            className={division === 'week' && controlStyles.selected}
            onClick={this.handleDivision.bind(this, 'week')}>
            Week
          </div>
          <div
            className={division === 'month' && controlStyles.selected}
            onClick={this.handleDivision.bind(this, 'month')}>
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
  handleDivision = (division) => this.setState({ division });
}

export default Controls;
