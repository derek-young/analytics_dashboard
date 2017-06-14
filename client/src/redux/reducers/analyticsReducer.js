import { getDayRange } from '../../components/Overview/Controls/DatePickers/dateParams';

const defaults = {
  isFetching: false,
  isRetrieved: false,
  query: {
    storeId: null,
    division: sessionStorage.getItem('division') || 'hour',
    startDate: sessionStorage.getItem('startDate') || getDayRange(new Date()).startDate,
    endDate: sessionStorage.getItem('endDate') || getDayRange(new Date()).endDate
  },
  analytics: {
    startDate: null,
    endDate: null,
    deltaDate: null,
    data: {}
  }
};

export default function analyticsReducer(state = defaults, action) {
  switch(action.type) {
    case 'RETRIEVING_ANALYTICS': {
      return {
        ...state,
        isFetching: true,
        isRetrieved: false
      };
    }

    case 'ANALYTICS_RETRIEVED': {
      return {
        ...state,
        isFetching: false,
        isRetrieved: true,
        analytics: action.payload
      };
    }

    case 'UPDATE_DIVISION': {
      sessionStorage.setItem('division', action.payload);

      return {
        ...state,
        query: {
          ...state.query,
          division: action.payload
        }
      };
    }

    case 'UPDATE_QUERY_DATES': {
      const { startDate, endDate } = action.payload;

      sessionStorage.setItem('startDate', startDate);
      sessionStorage.setItem('endDate', endDate);

      return {
        ...state,
        query: {
          ...state.query,
          startDate,
          endDate
        }
      };
    }
  }
  return state;
};
