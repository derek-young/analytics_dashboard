import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';

import authStyles from './authStyles.css';

import Signin from './Signin';
import Signup from './Signup';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'signin',
    };
  }

  render() {
    const { history } = this.props;

    return (
      <div className={authStyles.authBody}>
        <div className={authStyles.authContainer}>
          <div className={authStyles.authHeader}>
            <h1>Analytics Dashboard</h1>
          </div>
          <div className={authStyles.authContent}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            >
              <Tab label="Signin" value="signin">
                <Signin history={history} />
              </Tab>
              <Tab label="Signup" value="signup">
                <Signup history={history} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }

  handleChange(value) {
    this.setState({ value });
  }
}

export default Authorization;
