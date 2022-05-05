const express = require('express');

const router = express.Router();

const pingRoutes = require('./ping.js');
const healthCheckRoutes = require('./health-check');
const apiSpecRoutes = require('./api-spec');
const authRoutes = require('./auth');
const postRoutes = require('./post');
const categoryRoutes = require('./category');

pingRoutes(router);
healthCheckRoutes(router);
apiSpecRoutes(router);
authRoutes(router);
postRoutes(router);
categoryRoutes(router);

module.exports = router;
