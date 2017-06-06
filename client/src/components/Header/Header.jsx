import React from 'react';
import Avatar from 'material-ui/Avatar';
import Notification from 'material-ui/svg-icons/social/notifications-none';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';

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
}

const person = {
  width: 65,
  height: 65
}

const Header = () => (
  <header className={headerStyles.main}>
    <div className={headerStyles.logo}>
      <img src="img/accenture-red-arrow-logo@2x.jpg" />
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
