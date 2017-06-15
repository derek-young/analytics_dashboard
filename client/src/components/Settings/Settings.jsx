import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {
  getUserSettings,
  updateUser,
  updateMessage,
  handleSettingsChange
} from '../../redux/actions';
import appStyles from '../appStyles.css';
import buttonStyle from '../buttonStyle';
import settingStyles from './settingStyles.css';

const paperStyles = {
  backgroundColor: 'white',
  marginLeft: 30,
  marginRight: 30,
  paddingTop: 20,
  paddingBottom: 20
};

const textFieldStyles = {
  floatingLabelStyle: {
    color: '#4a4a4a'
  }
};

class Settings extends React.Component {
  componentWillMount() {
    getUserSettings();
  }

  render() {
    const {
      name, email, username, errorMessage, saveMessage
    } = this.props.user;

    return (
      <div className={appStyles.content + ' ' + settingStyles.main}>
        <h2 className={appStyles.header}>
          Settings
        </h2>
        <Paper style={paperStyles} zDepth={1} rounded={false}>
          <form name="settings-form">
            <p className={settingStyles.subtext}>Username</p>
            <p className={settingStyles.text}>{username}</p>
            <TextField
              onChange={handleSettingsChange.bind(this, 'name')}
              value={name || ''}
              floatingLabelText="Name"
              fullWidth={true}
              {...textFieldStyles}
            />
            <br />
            <TextField
              onChange={handleSettingsChange.bind(this, 'email')}
              value={email || ''}
              floatingLabelText="Email"
              fullWidth={true}
              type="email"
              errorText={errorMessage}
              {...textFieldStyles}
            />
            <br />
            <div className={settingStyles.saveMessage}>
              {saveMessage}
            </div>
            <div className={appStyles.button + ' ' + settingStyles.button}>
              <RaisedButton
                onClick={this.handleSubmit.bind(this)}
                label="Update Profile Settings"
                {...buttonStyle}
              />
            </div>
          </form>
        </Paper>
      </div>
    );
  }

  handleSubmit() {
    const { name, email } = this.props.user;
    if (email && !this.validEmail(email)) {
      updateMessage({ type: 'error', message: 'Please enter a valid email' });
    } else {
      updateMessage({ type: 'error', message: '' });
      updateUser({ name, email });
    }
  }

  validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}


export default connect((store) => ({
  user: store.user
}))(Settings);
