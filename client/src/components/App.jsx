import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import appStyles from './appStyles.css';

import Header from './Header/Header';
import Nav from './Nav/Nav';
import PrivateRoute from './Auth/PrivateRoute';
import Overview from './Overview/Overview';

const App = () => (
  <Router>
    <div>
      <Header />
      <div className={appStyles.body}>
        <Nav />
        <div className={appStyles.content}>
          <Switch>
            <PrivateRoute
              exact path="/overview"
              component={Overview}
              isAuthenticated={true}
            />
            {/* <Route path="/auth" component={Authorization} /> */}

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
    </div>
  </Router>
);

export default App;
