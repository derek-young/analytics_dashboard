import React from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';

import { verifyAuthentication } from '../redux/actions';
import appStyles from './appStyles.css';

import Header from './Header/Header';
import Nav from './Nav/Nav';
import Authorization from './Auth/Auth';
import PrivateRoute from './Auth/PrivateRoute';
import Overview from './Overview/Overview';
import Settings from './Settings/Settings';

class App extends React.Component {
  componentWillMount() {
    const { auth: { isAuthenticated }} = this.props;

    if (isAuthenticated) {
      verifyAuthentication();
    }
  }

  render() {
    const { auth, menuItems, location, history } = this.props;

    return (
      <div>
        <Header
          isAuthenticated={auth.isAuthenticated}
          menuItems={menuItems}
          history={history}
        />
        <div className={appStyles.body}>
          {
            !location.pathname.includes('/auth')
            && auth.isAuthenticated
            && <Nav menuItems={menuItems} />
          }
          <Switch>
            <Route path="/auth" component={Authorization} />
            <PrivateRoute
              exact path="/overview"
              component={Overview}
              isAuthenticated={auth.isAuthenticated}
            />
            <PrivateRoute
              exact path="/settings"
              component={Settings}
              isAuthenticated={auth.isAuthenticated}
            />

            {/* Catch all - redirect to /overview */}
            <Route render={props => (
              <Redirect to={{
                pathname: '/overview',
                state: { from: props.location }
              }} />
            )} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect((store) => ({
  auth: store.auth,
  menuItems: store.nav.menuItems
}))(App);
