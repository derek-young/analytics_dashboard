const Analytics = require('./analyticsModel.js');

const controller = {
  retrieve: function(req, res, next) {
    console.log('received analytics reqeust')
    const { storeId, division, startDate, endDate } = req.query;
    console.log(division);
    console.log(startDate + ' - ' + endDate);
    res.sendStatus(200);
  }
};

module.exports = controller;
