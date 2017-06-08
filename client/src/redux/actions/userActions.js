import axios from 'axios';

import store from '../../redux/store';
const { dispatch } = store;

export function getUserSettings() {
  retrieveSettings();

  return axios.get('/api/user/protected/settings', {
      headers: { Authorization: 'Bearer ' + localStorage.token }
    })
    .then(res => res.data)
    .then(receiveSettings)
    .catch(err => console.log('Error retrieving user ', err));
}

function retrieveSettings() {
  return dispatch({
    type: 'RETRIEVE_SETTINGS'
  });
}

function receiveSettings(user) {
  return dispatch({
    type: 'RECEIVE_SETTINGS',
    payload: user
  });
}
