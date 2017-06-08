const router = require('express').Router();
const userCtrl = require('./userController');
const User = require('./userModel');

router.use('/protected', function(req, res, next) {
  console.log(req.headers.authorization)
  let token = req.headers.authorization || req.body.token;

  if (token && token.indexOf('Bearer') >= 0) {
    token = token.substring(7, token.length);
  }

  return User.verifyToken(token, function(err, payload) {
    if (err) {
      return res.status(403).send(err.message);
    }

    console.log(payload.id)

    return User.findOne({
      where: { id: payload.id }
    }).then((user) => {
      console.log(user.dataValues);
      const { username, name, email } = user.dataValues;
      req.user = { }
      next();
    })
  });
});

router.get('/', userCtrl.signin);
router.post('/', userCtrl.create);
router.get('/protected/settings', userCtrl.settings);

module.exports = router;
