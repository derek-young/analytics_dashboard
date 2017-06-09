const protectedRouter = require('express').Router();
const analyticsCtrl = require('./analyticsController');
const User = require('../user/userModel');

protectedRouter.get('/', analyticsCtrl.retrieve);

module.exports.protectedRouter = protectedRouter;
