import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { getUserSettings } from '../../redux/actions';
import appStyles from '../appStyles.css';
import buttonStyle from '../buttonStyle';
import settingStyles from './settingStyles.css';

const paperStyles = {
  width: 500,
  backgroundColor: 'white',
  marginLeft: 30,
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
    const { user: { username, name, email }} = this.props;

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
              defaultValue={name}
              floatingLabelText="Name"
              fullWidth={true}
              {...textFieldStyles}
            />
            <br />
            <TextField
              defaultValue={email}
              floatingLabelText="Email"
              fullWidth={true}
              {...textFieldStyles}
            />
            <div className={appStyles.button + ' ' + settingStyles.button}>
              <RaisedButton
                onClick={() => console.log('Settings submitted')}
                label="Update Profile Settings"
                {...buttonStyle}
              />
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}


export default connect((store) => ({
  user: store.user
}))(Settings);
