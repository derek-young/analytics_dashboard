const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../../db/database');

const Analytics = db.define('analytic', {
  key: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  dateTime: {
    type: Sequelize.DATE
  },
  value: {
    type: Sequelize.FLOAT
  },
  storeId: {
    type: Sequelize.INTEGER
  }
});

Analytics.buildResponseData = function({ analytics, division }) {
  const data = {};

  for (let i = 0; i < analytics.length; i++) {
    const analytic = analytics[i].dataValues;
    const { key, type, dateTime, value, storeId } = analytic;

    data[key] = data[key] || {
      type,
      key,
      name: getAnalyticName(key)
    };

    data[key].values = data[key].values || valueStructure(division);
    data[key].units = data[key].units || getUnits(division);

    data[key].values.push(value);
  }

  console.log(data)
  return data;

    // {
    //   "visitors": {
    //     "type": "count",
    //     "key": "visitors",
    //     "name": "No. of Visits",
    //     "values": [
    //       149,
    //       240,
    //       121,
    //       365,
    //       478,
    //       149,
    //       68
    //     ],
    //     "units": [
    //       "May 09",
    //       "May 10",
    //       "May 11",
    //       "May 12",
    //       "May 13",
    //       "May 14",
    //       "May 15"
    //     ],
    //     "deltas": [
    //       9,
    //       -2,
    //       -17,
    //       -31,
    //       12,
    //       -10,
    //       28
    //     ]
    //   },
    //   "unique_visits": {
    //     "type": "count",
    //     "key": "unique_visits",
    //     "name": "Unique Visitors",
    //     "values": [
    //       44,
    //       32,
    //       19,
    //       59,
    //       78,
    //       48,
    //       64
    //     ],
    //     "units": [
    //       "May 09",
    //       "May 10",
    //       "May 11",
    //       "May 12",
    //       "May 13",
    //       "May 14",
    //       "May 15"
    //     ],
    //     "deltas": [
    //       12,
    //       -12,
    //       -13,
    //       40,
    //       19,
    //       -30,
    //       18
    //     ]
    //   },
    //   "average_duration": {
    //     "type": "minutes",
    //     "key": "average_duration",
    //     "name": "Avg. Duration",
    //     "values": [
    //       44,
    //       32,
    //       19,
    //       59,
    //       78,
    //       48,
    //       64
    //     ],
    //     "units": [
    //       "May 09",
    //       "May 10",
    //       "May 11",
    //       "May 12",
    //       "May 13",
    //       "May 14",
    //       "May 15"
    //     ],
    //     "deltas": [
    //       1,
    //       -2,
    //       -3,
    //       4,
    //       9,
    //       -3,
    //       8
    //     ]
    //   },
    //   "visitors_ios": {
    //     "type": "count",
    //     "key": "visitors_ios",
    //     "name": "iOS Visits",
    //     "values": [
    //       24,
    //       22,
    //       19,
    //       29,
    //       68,
    //       28,
    //       4
    //     ],
    //     "units": [
    //       "May 09",
    //       "May 10",
    //       "May 11",
    //       "May 12",
    //       "May 13",
    //       "May 14",
    //       "May 15"
    //     ],
    //     "deltas": [
    //       12,
    //       -12,
    //       -13,
    //       40,
    //       19,
    //       -30,
    //       18
    //     ]
    //   },
    //   "visitors_android": {
    //     "type": "count",
    //     "key": "visitors_android",
    //     "name": "Android Visits",
    //     "values": [
    //       12,
    //       32,
    //       21,
    //       29,
    //       38,
    //       41,
    //       24
    //     ],
    //     "units": [
    //       "May 09",
    //       "May 10",
    //       "May 11",
    //       "May 12",
    //       "May 13",
    //       "May 14",
    //       "May 15"
    //     ],
    //     "deltas": [
    //       12,
    //       -12,
    //       -13,
    //       40,
    //       19,
    //       -30,
    //       18
    //     ]
    //   }

}

function valueStructure(division) {
  if (division === 'hour') {
    const result = new Array(4);
    return result.fill(0);
  }
}

function getUnits(division) {
  if (division === 'hour') {
    return [
      '12:00 AM - 6:00 AM',
      '6:00 AM - 12:00 PM',
      '12:00 PM - 6:00 PM',
      '6:00 PM - 12:00 AM'
    ];
  }
}

function getAnalyticName(key) {
  const names = {
    unique_visits: 'No. of Visits',
    visitors: 'Unique Visitors',
    visitors_ios: 'iOS Visits',
    visitors_android: 'Android Visits',
    average_duration: 'Avg. Duration'
  };

  return names[key] || 'Unknown Analytic - Add to analytic key/value table';
}

db.sync();

module.exports = Analytics;
