const Analytics = require('./analyticsModel.js');

const controller = {
  retrieve: function(req, res, next) {
    const now = new Date();
    const { storeId, division } = req.query;
    let {
      startDate = 0,
      endDate = now.getTime()
    } = req.query;

    startDate = Number(startDate);
    endDate = Number(endDate);

    const where = {
      dateTime: {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
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
          data: Analytics.buildResponseData({
            analytics,
            division,
            startDate,
            endDate
          })
        });
      })
      .catch(err => {
        console.log('Error retrieving analytics', err);
        return res.sendStatus(500);
      })
  }
};

module.exports = controller;
