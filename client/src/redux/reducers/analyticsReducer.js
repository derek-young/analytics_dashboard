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
    "startDate": 1494288000,
    "endDate": 1494806400,
    "deltaDate": 1493596800,
    "data": {
      "visitors": {
        "type": "count",
        "key": "visitors",
        "name": "No. of Visits",
        "values": [
          149,
          240,
          121,
          365,
          478,
          149,
          68
        ],
        "units": [
          "May 09",
          "May 10",
          "May 11",
          "May 12",
          "May 13",
          "May 14",
          "May 15"
        ],
        "deltas": [
          9,
          -2,
          -17,
          -31,
          12,
          -10,
          28
        ]
      },
      "unique_visits": {
        "type": "count",
        "key": "unique_visits",
        "name": "Unique Visitors",
        "values": [
          44,
          32,
          19,
          59,
          78,
          48,
          64
        ],
        "units": [
          "May 09",
          "May 10",
          "May 11",
          "May 12",
          "May 13",
          "May 14",
          "May 15"
        ],
        "deltas": [
          12,
          -12,
          -13,
          40,
          19,
          -30,
          18
        ]
      },
      "average_duration": {
        "type": "minutes",
        "key": "average_duration",
        "name": "Avg. Duration",
        "values": [
          44,
          32,
          19,
          59,
          78,
          48,
          64
        ],
        "units": [
          "May 09",
          "May 10",
          "May 11",
          "May 12",
          "May 13",
          "May 14",
          "May 15"
        ],
        "deltas": [
          1,
          -2,
          -3,
          4,
          9,
          -3,
          8
        ]
      },
      "visitors_ios": {
        "type": "count",
        "key": "visitors_ios",
        "name": "iOS Visits",
        "values": [
          24,
          22,
          19,
          29,
          68,
          28,
          4
        ],
        "units": [
          "May 09",
          "May 10",
          "May 11",
          "May 12",
          "May 13",
          "May 14",
          "May 15"
        ],
        "deltas": [
          12,
          -12,
          -13,
          40,
          19,
          -30,
          18
        ]
      },
      "visitors_android": {
        "type": "count",
        "key": "visitors_android",
        "name": "Android Visits",
        "values": [
          12,
          32,
          21,
          29,
          38,
          41,
          24
        ],
        "units": [
          "May 09",
          "May 10",
          "May 11",
          "May 12",
          "May 13",
          "May 14",
          "May 15"
        ],
        "deltas": [
          12,
          -12,
          -13,
          40,
          19,
          -30,
          18
        ]
      }
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
