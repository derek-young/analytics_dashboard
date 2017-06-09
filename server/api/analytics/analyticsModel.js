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

db.sync();

module.exports = Analytics;
