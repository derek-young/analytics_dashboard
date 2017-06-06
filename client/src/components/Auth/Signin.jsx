import React from 'react';
import { connect } from 'react-redux';

import { signinSignup } from '../../redux/actions';
import authStyles from './authStyles.css';

const Signin = ({ error, history }) => (
  <div className={authStyles.signin}>
    <h2>Signin</h2>
    <form name="signinForm" onSubmit={handleSignin.bind(this, history)}>
      <div>
        <input type="text" name="username" placeholder="Username" required />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" required />
      </div>
      <button type="submit" className="btn">Signin</button>
    </form>
    <div className={authStyles['error-text']}>{error}</div>
  </div>
);

function handleSignin(history, e) {
  e.preventDefault();
  const username = e.target.querySelector('input[name="username"]').value;
  const password = e.target.querySelector('input[name="password"]').value;

  return signinSignup('get', { username, password })
    .then(success => {
      if (success) {
        return history.push('/planner');
      }
    });
}

export default connect(store => ({
  error: store.auth.error
}))(Signin);
