import axios from 'axios';

import store from '../../redux/store';
const { dispatch } = store;

export function retrieveAnalytics() {
  dispatch({
    type: 'RETRIEVING_ANALYTICS'
  });

  // return axios.get('/api/trip', {
  //     headers: { Authorization: 'Bearer ' + localStorage.token }
  //   })
  //   .then(res => res.data.data)
  //   .then(analyticsRetrieved);
}

function analyticsRetrieved(analytics) {
  analytics = analytics || [];

  return dispatch({
    type: 'ANALYTICS_RETRIEVED',
    payload: analytics
  });
}

export function updateDivision(division) {
  return dispatch({
    type: 'UPDATE_DIVISION',
    payload: division
  })
}
