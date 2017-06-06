import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';

import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Clock from 'material-ui/svg-icons/device/access-time';
import TimeLine from 'material-ui/svg-icons/action/timeline';
import Settings from 'material-ui/svg-icons/action/settings';

import navStyles from './navStyles.css';

const menu = {
  paddingTop: 20,
  paddingBottom: 20,
  backgroundColor: '#4a4a4a'
};

const Nav = () => (
  <div>
    <Paper style={menu}>
      <Menu className={navStyles.menu}>
        <p className={navStyles.heading}>
          Data & Analytics
        </p>
        <Link to="/overview">
          <MenuItem
            style={getMenuItemStyle({ path: '#/overview' })}
            primaryText="Overview"
            leftIcon={<TimeLine />}
          />
        </Link>
        <MenuItem
          style={getMenuItemStyle({ path: '#' })}
          primaryText="Lorem Ipsum"
          leftIcon={<RemoveRedEye />}
        />
        <MenuItem
          style={getMenuItemStyle({ path: '#' })}
          primaryText="Itusa Moren"
          leftIcon={<Clock />}
        />
        <br />
        <br />
        <br />
        <p className={navStyles.heading}>
          Profile
        </p>
        <MenuItem
          style={getMenuItemStyle({ path: '#/settings' })}
          primaryText="Settings"
          leftIcon={<Settings />}
        />
      </Menu>
    </Paper>
  </div>
);

function getMenuItemStyle({ path }) {
  const menuItem = {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 16,
    color: '#9d9d9d',
    overflow: 'hidden'
  };

  const selectedMenuItem = {
    backgroundColor: '#3b3b3b',
    color: '#FFF'
  };

  if (path === window.location.hash) {
    return { ...menuItem, ...selectedMenuItem };
  }

  return menuItem;
}

export default Nav;
