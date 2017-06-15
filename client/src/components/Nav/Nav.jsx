import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';

import navStyles from './navStyles.css';

const menu = {
  position: 'fixed',
  overflowY: 'auto',
  paddingTop: 20,
  paddingBottom: 20,
  height: '100%',
  backgroundColor: '#4a4a4a'
};

const Nav = ({ menuItems }) => (
  <div className={navStyles.main}>
    <Paper style={menu}>
      <Menu className={navStyles.menu}>
        {menuItems.map((menuSection, i) => (
          <section key={i}>
            <p className={navStyles.heading}>
              {menuSection.heading}
            </p>
            {menuSection.items.map(({ path, text, Icon }, i) => (
              <Link key={i} to={path}>
                <MenuItem
                  style={getMenuItemStyle({ path })}
                  primaryText={text}
                  leftIcon={<Icon />}
                />
              </Link>
            ))}
            <br />
            <br />
            <br />
          </section>
        ))}
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

  const hash = window.location.hash;

  if (path === hash.substring(1, hash.length)) {
    return { ...menuItem, ...selectedMenuItem };
  }

  return menuItem;
}

export default Nav;
