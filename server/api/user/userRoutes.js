const router = require('express').Router();
const userCtrl = require('./userController');
const User = require('./userModel');

router.use('/protected', User.verifyToken);

router.get('/', userCtrl.signin);
router.post('/', userCtrl.create);
router.get('/protected/settings', userCtrl.getSettings);
router.patch('/protected/settings', userCtrl.updateSettings);

module.exports = router;
