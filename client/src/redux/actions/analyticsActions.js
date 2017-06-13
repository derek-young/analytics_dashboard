import axios from 'axios';

import store from '../../redux/store';
const { dispatch } = store;

export function retrieveAnalytics() {
  dispatch({
    type: 'RETRIEVING_ANALYTICS'
  });

  return axios.get('/api/protected/analytics', {
      headers: { Authorization: 'Bearer ' + localStorage.token },
      params: store.getState().analytics.query
    })
    .then(res => res.data)
    .then(analyticsRetrieved);
}

function analyticsRetrieved(analytics) {
  console.log('analytics retrieved', analytics);
  // analytics = analytics || [];
  //
  // return dispatch({
  //   type: 'ANALYTICS_RETRIEVED',
  //   payload: analytics
  // });
}

export function updateDivision(division) {
  return dispatch({
    type: 'UPDATE_DIVISION',
    payload: division
  })
}

export function updateQueryDates(dates) {
  dispatch({
    type: 'UPDATE_QUERY_DATES',
    payload: dates
  });

  retrieveAnalytics();
}
