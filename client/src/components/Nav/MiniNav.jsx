import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';

import { toggleNav } from '../../redux/actions';
import navStyles from './navStyles.css';

const menu = {
  backgroundColor: 'white'
};

const MiniNav = ({ menuItems }) => (
  <div className={navStyles.miniNav}>
    <IconMenu
      menuStyle={menu}
      iconButtonElement={
        <IconButton touch={true}>
          <Menu className={navStyles.icon} />
        </IconButton>
      }
    >
      {menuItems.map(menuSection => (
        menuSection.items.map(({ path, text, Icon }, i) => (
          <Link key={text + i} to={path}>
            <MenuItem
              primaryText={text}
              leftIcon={<Icon />}
            />
          </Link>
        ))
      ))}
    </IconMenu>
  </div>
);

export default MiniNav
