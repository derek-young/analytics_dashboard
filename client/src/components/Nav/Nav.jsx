import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Clock from 'material-ui/svg-icons/device/access-time';
import TimeLine from 'material-ui/svg-icons/action/timeline';
import Settings from 'material-ui/svg-icons/action/settings';

import navStyles from './NavStyles.css';

const Nav = () => (
  <div className={navStyles.main}>
    <Paper>
      <Menu className={navStyles.menu}>
        <p>Data & Analytics</p>
        <MenuItem primaryText="Overview" leftIcon={<TimeLine />} />
        <MenuItem primaryText="Lorem Ipsum" leftIcon={<RemoveRedEye />} />
        <MenuItem primaryText="Itusa Moren" leftIcon={<Clock />} />
        <br />
        <p>Profile</p>
        <MenuItem primaryText="Settings" leftIcon={<Settings />} />
      </Menu>
    </Paper>
  </div>
);

export default Nav;
