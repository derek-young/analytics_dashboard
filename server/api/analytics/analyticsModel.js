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

Analytics.buildResponseData = function({
  analytics,
  division,
  startDate,
  endDate
}) {
  const data = {};
  const unitsValues = {};

  for (let i = 0; i < analytics.length; i++) {
    const analytic = analytics[i].dataValues;
    const { key, type, dateTime, value, storeId } = analytic;

    data[key] = data[key] || {
      type,
      key,
      name: getAnalyticName(key)
    };

    unitsValues[key] = unitsValues[key] || getUnits(division, startDate, endDate);
    addToValues(unitsValues[key], value, division, dateTime);
  }

  for (let key in data) {
    data[key].units = Object.keys(unitsValues[key]);
    data[key].values = Object.values(unitsValues[key]);
  }

  return data;
}

function addToValues(values, value, division, dateTime) {
  switch (division) {
    case 'hour': {
      const hour = dateTime.getHours();
      if (hour < 6) return values['12:00 AM - 6:00 AM'] += value;
      if (hour < 12) return values['6:00 AM - 12:00 PM'] += value;
      if (hour < 18) return values['12:00 PM - 6:00 PM'] += value;
      return values['6:00 PM - 12:00 AM'] += value;
    }

    case 'day': {
      const key = dateTime.getFullMonth() + ' ' + dateTime.getDate();
      return values[key] += value;
    }

    case 'week': {
      const start = new Date(dateTime);

      start.setDate(start.getDate() - start.getDay());
      const from = `${start.getMonth() + 1}/${start.getDate()}`;

      start.setDate(start.getDate() + 6);
      const to = `${start.getMonth() + 1}/${start.getDate()}`;

      return values[from + ' - ' + to] += value;
    }

    case 'month': {
      const key = dateTime.getFullMonth() + ' ' + dateTime.getFullYear();
      return values[key] += value;
    }
  }
}

function valueStructure(units) {
  const values = new Array(units.length);
  return values.fill(0);
}

function getUnits(division, startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  switch (division) {
    case 'hour': {
      return {
        '12:00 AM - 6:00 AM': 0,
        '6:00 AM - 12:00 PM': 0,
        '12:00 PM - 6:00 PM': 0,
        '6:00 PM - 12:00 AM': 0
      };
    }

    case 'day': {
      const days = {};

      while (start < end) {
        const key = start.getFullMonth() + ' ' + start.getDate();
        days[key] = 0;
        start.setDate(start.getDate() + 1);
      }

      return days;
    }

    case 'week': {
      const weeks = {};

      while (start < end) {
        const from = `${start.getMonth() + 1}/${start.getDate()}`;
        start.setDate(start.getDate() + 6);
        const to = `${start.getMonth() + 1}/${start.getDate()}`;

        weeks[from + ' - ' + to] = 0;
        start.setDate(start.getDate() + 1);
      }

      return weeks;
    }

    case 'month': {
      const months = {};

      while (start < end) {
        const key = start.getFullMonth() + ' ' + start.getFullYear();
        months[key] = 0;
        start.setMonth(start.getMonth() + 1);
      }

      return months;
    }
  }
}

function getAnalyticName(key) {
  const names = {
    unique_visits: 'Unique Visitors',
    visitors: 'No. of Visits',
    visitors_ios: 'iOS Visits',
    visitors_android: 'Android Visits',
    average_duration: 'Avg. Duration'
  };

  return names[key] || 'Unknown Analytic - Add to analytic key/value table';
}

db.sync();

module.exports = Analytics;
