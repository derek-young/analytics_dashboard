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
    data: {
      // "unique_visits": {
      //   "type": "minutes",
      //   "key": "unique_visits",
      //   "name": "Unique Visitors",
      //   "values": [
      //     44,
      //     32,
      //     19,
      //     59,
      //     78,
      //     48,
      //     64
      //   ],
      //   "units": [
      //     "May 09",
      //     "May 10",
      //     "May 11",
      //     "May 12",
      //     "May 13",
      //     "May 14",
      //     "May 15"
      //   ],
      //   "deltas": [
      //     12,
      //     -12,
      //     -13,
      //     40,
      //     19,
      //     -30,
      //     18
      //   ]
      // },
      // "visitors": {
      //   "type": "minutes",
      //   "key": "visitors",
      //   "name": "Unique Visitors",
      //   "values": [
      //     44,
      //     32,
      //     19,
      //     59,
      //     78,
      //     48,
      //     64
      //   ],
      //   "units": [
      //     "May 09",
      //     "May 10",
      //     "May 11",
      //     "May 12",
      //     "May 13",
      //     "May 14",
      //     "May 15"
      //   ],
      //   "deltas": [
      //     12,
      //     -12,
      //     -13,
      //     40,
      //     19,
      //     -30,
      //     18
      //   ]
      // },
      // "visitors_ios": {
      //   "type": "minutes",
      //   "key": "visitors_ios",
      //   "name": "Unique Visitors",
      //   "values": [
      //     44,
      //     32,
      //     19,
      //     59,
      //     78,
      //     48,
      //     64
      //   ],
      //   "units": [
      //     "May 09",
      //     "May 10",
      //     "May 11",
      //     "May 12",
      //     "May 13",
      //     "May 14",
      //     "May 15"
      //   ],
      //   "deltas": [
      //     12,
      //     -12,
      //     -13,
      //     40,
      //     19,
      //     -30,
      //     18
      //   ]
      // },
      // "visitors_android": {
      //   "type": "minutes",
      //   "key": "visitors_android",
      //   "name": "Unique Visitors",
      //   "values": [
      //     44,
      //     32,
      //     19,
      //     59,
      //     78,
      //     48,
      //     64
      //   ],
      //   "units": [
      //     "May 09",
      //     "May 10",
      //     "May 11",
      //     "May 12",
      //     "May 13",
      //     "May 14",
      //     "May 15"
      //   ],
      //   "deltas": [
      //     12,
      //     -12,
      //     -13,
      //     40,
      //     19,
      //     -30,
      //     18
      //   ]
      // },
      // "average_duration": {
      //   "type": "minutes",
      //   "key": "average_duration",
      //   "name": "Unique Visitors",
      //   "values": [
      //     44,
      //     32,
      //     19,
      //     59,
      //     78,
      //     48,
      //     64
      //   ],
      //   "units": [
      //     "May 09",
      //     "May 10",
      //     "May 11",
      //     "May 12",
      //     "May 13",
      //     "May 14",
      //     "May 15"
      //   ],
      //   "deltas": [
      //     12,
      //     -12,
      //     -13,
      //     40,
      //     19,
      //     -30,
      //     18
      //   ]
      // }
    }
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
