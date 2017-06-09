const Analytics = require('./server/api/analytics/analyticsModel');
const data = require('./Analytics-Data.json');

for (let i = 1; i < data.length; i++) {
  Analytics.create(data[i]);
}
