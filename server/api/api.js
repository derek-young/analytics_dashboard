const express = require('express');
const User = require('./user/userModel');
const userRoutes = require('./user/userRoutes').router;
const protectedUserRoutes = require('./user/userRoutes').protectedRouter;
const protectedAnalyticsRoutes = require('./analytics/analyticsRoutes').protectedRouter;
const router = express.Router();

router.use('/protected', User.verifyToken);

router.use('/user', userRoutes);
router.use('/protected/user', protectedUserRoutes);
router.use('/protected/analytics', protectedAnalyticsRoutes);

module.exports = router;
