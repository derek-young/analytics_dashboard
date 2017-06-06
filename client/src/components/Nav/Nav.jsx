import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Clock from 'material-ui/svg-icons/device/access-time';
import TimeLine from 'material-ui/svg-icons/action/timeline';
import Settings from 'material-ui/svg-icons/action/settings';

import navStyles from './navStyles.css';

const menu = {
  paddingTop: 20,
  paddingBottom: 20,
  backgroundColor: '#4a4a4a',
  width: 300
};

const menuItem = {
  paddingLeft: 20,
  paddingRight: 20,
};

const Nav = () => (
  <div>
    <Paper style={menu}>
      <Menu className={navStyles.menu}>
        <p className={navStyles.heading}>
          Data & Analytics
        </p>
        <MenuItem
          style={menuItem}
          primaryText="Overview"
          leftIcon={<TimeLine />} />
        <MenuItem
          style={menuItem}
          primaryText="Lorem Ipsum"
          leftIcon={<RemoveRedEye />} />
        <MenuItem
          style={menuItem}
          primaryText="Itusa Moren"
          leftIcon={<Clock />} />
        <br />
        <br />
        <br />
        <p className={navStyles.heading}>
          Profile
        </p>
        <MenuItem
          style={menuItem}
          primaryText="Settings"
          leftIcon={<Settings />} />
      </Menu>
    </Paper>
  </div>
);

export default Nav;
