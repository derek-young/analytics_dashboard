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

    if (storeId) where.storeId = storeId;

    return Analytics.findAll({ where })
      .then(analytics => {
        const data = Analytics.buildResponseData({
          analytics,
          division,
          startDate,
          endDate
        });

        return res.json({
          startDate,
          endDate,
          deltaDate: null,
          data
        });
      })
      .catch(err => {
        console.log('Error retrieving analytics', err);
        return res.sendStatus(500);
      })
  }
};

module.exports = controller;
