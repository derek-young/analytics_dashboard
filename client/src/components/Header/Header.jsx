import React from 'react';
import Avatar from 'material-ui/Avatar';
import Notification from 'material-ui/svg-icons/social/notifications-none';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';

import headerStyles from './headerStyles.css';

const notification = {
  height: 40,
  width: 40,
  marginRight: 30,
  color: '#4a4a4a'
};

const avatar = {
  width: 60,
  height: 60
}

const person = {
  width: 100,
  height: 100
}

const Header = () => (
  <header className={headerStyles.main}>
    <div className={headerStyles.logo}>
      <img src="img/accenture-red-arrow-logo.jpg" />
    </div>
    <div className={headerStyles.right}>
      <Notification style={notification}/>
      {/* <Avatar src="#"
        style={avatar}
      /> */}
      <Avatar
        icon={<PersonOutline style={person} />}
        style={avatar}
      />
    </div>
  </header>
);

export default Header;
