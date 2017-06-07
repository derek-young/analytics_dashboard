import React from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';

import appStyles from './appStyles.css';

import Header from './Header/Header';
import Nav from './Nav/Nav';
import Authorization from './Auth/Auth';
import PrivateRoute from './Auth/PrivateRoute';
import Overview from './Overview/Overview';
import Settings from './Settings/Settings';

const App = ({ auth, location, history }) => (
  <div>
    <Header history={history} />
    <div className={appStyles.body}>
      {location.pathname !== '/auth' && auth.isAuthenticated && <Nav />}
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

export default connect((store) => ({
  auth: store.auth
}))(App);
