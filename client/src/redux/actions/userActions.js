import axios from 'axios';

import store from '../../redux/store';
const { dispatch } = store;

import { signout } from './authActions';

export function getUserSettings() {
  retrieveSettings();

  return axios.get('/api/protected/user/settings', {
      headers: { Authorization: 'Bearer ' + localStorage.token }
    })
    .then(res => res.data)
    .then(receiveSettings)
    .catch(err => {
      console.log('Error retrieving user ', err);
      if (err.response.status === 403) {
        signout();
      }
    });
}

export function updateUser({ name, email }) {
  return axios.patch('/api/protected/user/settings', {
      token: localStorage.token,
      name,
      email
    })
    .then(res => {
      updateMessage({ type: 'save', message: 'Settings have been saved' });
      setTimeout(() => (updateMessage({ type: 'save', message: '' })), 8000);
      return res.data;
    })
    .then(receiveSettings)
    .catch(err => console.log('Error saving user data ', err));
}

function retrieveSettings() {
  return dispatch({
    type: 'RETRIEVE_SETTINGS'
  });
}

export function receiveSettings(user) {
  return dispatch({
    type: 'RECEIVE_SETTINGS',
    payload: user
  });
}

export function updateMessage(payload) {
  return dispatch({
    type: 'UPDATE_MESSAGE',
    payload
  });
}

export function handleSettingsChange(field, e, value) {
  return dispatch({
    type: 'UPDATE_SETTING',
    payload: { field, value }
  });
}
