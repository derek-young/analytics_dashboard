const Analytics = require('./analyticsModel.js');

const controller = {
  retrieve: function(req, res, next) {
    const now = new Date();

    const {
      storeId,
      division,
      startDate = 0,
      endDate = now.getTime()
    } = req.query;

    const where = {
      dateTime: {
        $gte: new Date(Number(startDate)),
        $lte: new Date(Number(endDate))
      }
    };

    console.log(division);
    console.log(startDate + ' - ' + endDate);

    if (storeId) where.storeId = storeId;

    return Analytics.findAll({ where })
      .then(analytics => {
        return res.json({
          startDate,
          endDate,
          deltaDate: null,
          data: Analytics.buildResponseData({ analytics, division })
        });
      })
      .error(err => {
        console.log('Error retrieving analytics', err);
        return res.sendStatus(500);
      })
  }
};

module.exports = controller;
