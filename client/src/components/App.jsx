import React from 'react';
import {
  HashRouter as Router,
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

const App = ({ auth }) => (
  <Router>
    <div>
      <Header />
      <div className={appStyles.body}>
        {auth.isAuthenticated && <Nav />}
        <Switch>
          <Route path="/auth" component={Authorization} />
          <PrivateRoute
            exact path="/overview"
            component={Overview}
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
  </Router>
);

export default connect((store) => ({
  auth: store.auth
}))(App);
