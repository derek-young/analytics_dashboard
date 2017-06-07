const defaults = {
  isFetching: false,
  isRetrieved: false,
  division: 'hour',
  analytics: {
    "startDate": 1494288000,
    "endDate": 1494806400,
    "deltaDate": 1493596800,
    "data": [
      {
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
      {
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
      {
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
      }
    ]
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
      return {
        ...state,
        division: action.payload
      };
    }
  }
  return state;
};
