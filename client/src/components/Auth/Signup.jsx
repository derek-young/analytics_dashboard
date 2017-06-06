import React from 'react';
import { connect } from 'react-redux';

import { signinSignup, signinError } from '../../redux/actions';
import authStyles from './authStyles.css';

const Signup = ({ error, history }) => (
  <div className={authStyles.signup}>
    <h2>Signup</h2>
    <form name="signupForm" onSubmit={handleSignup.bind(this, history)}>
      <div>
        <input type="text" name="username" placeholder="Username" required />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" required />
      </div>
      <div>
        <input type="password" name="confirm_password" placeholder="Confirm Password" required />
      </div>
      <button type="submit" className="btn">Signup</button>
    </form>
    <div className={authStyles['error-text']}>{error}</div>
  </div>
);

export function handleSignup(history, e) {
  e.preventDefault();
  const username = e.target.querySelector('input[name="username"]').value;
  const password = e.target.querySelector('input[name="password"]').value;
  const confirmPassword = e.target.querySelector('input[name="confirm_password"]').value;

  if (password !== confirmPassword) {
    return signinError('Passwords do not match');
  }

  return signinSignup('post', { username, password })
    .then(success => {
      if (success) {
        return history.push('/planner');
      }
    });
}

export default connect(store => ({
  error: store.auth.error
}))(Signup);
