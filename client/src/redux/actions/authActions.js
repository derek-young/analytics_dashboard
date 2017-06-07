import axios from 'axios';
import { HashRouter as Router } from 'react-router-dom';

import store from '../../redux/store';
const { dispatch } = store;

export function authenticateUser() {
  return axios.get('/api/user/authenticate', {
      headers: { Authorization: 'Bearer ' + localStorage.token }
    })
    .then(res => res.data.access)
    .then(receiveSigin)
    .catch(err => console.log('Error retrieving user ', err));
}

export function signinSignup(type, creds) {
  const options = type === 'get' ? { params: { ...creds }} : creds;

  requestSignin(creds);

  return axios[type]('/api/user', options)
    .then(res => res.data)
    .then(({ success, token, access }) => {
      if (success) {
        receiveSigin(access);
        localStorage.token = token;
        localStorage.access = access;
      }
      return success;
    })
    .catch(err => {
      if (err.response) {
        return signinError(err.response.data);
      }
      console.log(err);
    });
}

export function signout() {
  delete localStorage.token;
  delete localStorage.access;
  receiveSignout();
}

function requestSignin() {
  return dispatch({
    type: 'SIGNIN_REQUEST'
  });
}

function receiveSigin(access) {
  return dispatch({
    type: 'SIGNIN_SUCCESS',
    payload: access
  });
}

function receiveSignout() {
  return dispatch({
    type: 'SIGNOUT_SUCCESS',
  });
}

export function signinError(error) {
  return dispatch({
    type: 'SIGNIN_FAILURE',
    error
  });
}
