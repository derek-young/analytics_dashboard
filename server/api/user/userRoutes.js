const router = require('express').Router();
const protectedRouter = require('express').Router();
const userCtrl = require('./userController');
const User = require('./userModel');

router.use('/protected', User.verifyToken);

router.get('/', userCtrl.signin);
router.post('/', userCtrl.create);
protectedRouter.get('/settings', userCtrl.getSettings);
protectedRouter.patch('/settings', userCtrl.updateSettings);

module.exports.router = router;
module.exports.protectedRouter = protectedRouter;
