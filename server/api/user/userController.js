const User = require('./userModel.js');

const controller = {
  signin: function(req, res, next) {
    //Retrieve user from DB and authenticate
    return User.findOne({
      where: {
        username: req.query.username
      }
    })
    .then(function(user) {
      if (user && User.validatePW(req.query.password, user.password)) {
        const token = User.generateToken(user.dataValues);

        return res.json({
          success: true,
          token: token
        });
      }

      return res.status(403).send('Invalid username or password');
    });
  },

  create: function(req, res, next) {
    const password = User.generateHash(req.body.password);

    return User.findOrCreate({
      where: {
        username: req.body.username
      },
      defaults: {
        password: password
      }
    })
    .spread(function(user, created) {
      if (created) {
        console.log('User was successfully created');
        const token = User.generateToken(user.dataValues);

        return res.json({
          success: true,
          token: token
        });
      }

      return res.status(403).send('That username is taken, please select another');
    })
    .catch(function(err) {
      console.log('Error creating user: ', err);
      return res.sendStatus(500);
    });
  },

  settings: function(req, res, next) {
    console.log('settings');

    res.sendStatus(200);
  }
};

module.exports = controller;
