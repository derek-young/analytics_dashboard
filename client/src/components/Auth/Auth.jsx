import React from 'react';
import { Route, Link } from 'react-router-dom';

import authStyles from './authStyles.css';

import Signin from './Signin';
import Signup from './Signup';

const Authorization = () => (
  <div className={authStyles.authBody}>
    <div className={authStyles.authContainer}>
      <div className={authStyles.authHeader}>
        <h1>Travel Planner</h1>
      </div>
      <div className={authStyles.authContent}>
        <Route
          path="/auth/signin"
          component={Signin}
        />
        <Route
          path="/auth/signup"
          component={Signup}
        />
      </div>
      <div className={authStyles.authNav}>
        <Link to="/auth/signin">
          <button>Signin</button>
        </Link>
        <Link to="/auth/signup">
          <button>Signup</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Authorization;
