const Sequelize = require('sequelize');
const config = require('./dbconfig.js');

const sequelize = new Sequelize(config.db, config.role, config.pw, {
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  storage: './server/db/db.sqlite'
});

sequelize.authenticate()
.then(function(err) {
  console.log('Connection has been established successfully.');
})
.catch(function (err) {
  console.log('Unable to connect to the database:', err);
});

module.exports = sequelize;
