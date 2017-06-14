import React from 'react';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import Notification from 'material-ui/svg-icons/social/notifications-none';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';

import { signout } from '../../redux/actions';
import headerStyles from './headerStyles.css';

const notification = {
  height: 30,
  width: 30,
  marginRight: 20,
  color: '#4a4a4a'
};

const avatar = {
  width: 40,
  height: 40
};

const person = {
  width: 65,
  height: 65
};

const menu = {
  backgroundColor: 'white'
};

const Header = ({ isAuthenticated, history }) => (
  <header className={headerStyles.main}>
    <div className={headerStyles.logo}>
      <img src="img/accenture-red-arrow-logo@2x.jpg" />
    </div>
    {isAuthenticated && !history.location.pathname.includes('/auth') && 
      <div className={headerStyles.right}>
        <Notification style={notification} />
        <IconMenu
          menuStyle={menu}
          iconButtonElement={
            <IconButton touch={true}>
              <div className={headerStyles.profile}>
                <Avatar
                  icon={<PersonOutline style={person} />}
                  style={avatar}
                />
                <ExpandMoreIcon />
              </div>
            </IconButton>
          }
        >
          <MenuItem
            primaryText="Signout"
            onClick={signout}
          />
          <MenuItem
            primaryText="Settings"
            onClick={() => history.push('/settings')}
          />
        </IconMenu>
      </div>
    }
  </header>
);

export default Header;
