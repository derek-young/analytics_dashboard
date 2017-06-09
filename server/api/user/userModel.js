const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../../db/database');
const dbconfig = require('../../db/dbconfig.js');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

User.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.validatePW = (enteredPW, storedPW) => {
  return bcrypt.compareSync(enteredPW, storedPW);
};

User.generateToken = ({ id }) => {
  return jwt.sign({ id },
    dbconfig.secret, {
    expiresIn: 86400 // expires in 24 hours
  });
}

User.verifyToken = (req, res, next) => {
  let token = req.headers.authorization || req.body.token;

  if (token && token.indexOf('Bearer') >= 0) {
    token = token.substring(7, token.length);
  }

  return jwt.verify(token, dbconfig.secret, (err, payload) => {
    if (err) {
      return res.status(403).send(err.message);
    }

    return User.findOne({
        where: { id: payload.id }
      }).then((user) => {
        if (user) {
          req.user = user.dataValues;
        }
        next();
      });
  });
};

db.sync();

module.exports = User;
