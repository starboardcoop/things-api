const express = require('express');
const router = express.Router();
const authenticateTokenMiddleware = require('../auth/middleware/authenticateToken');
const thingsEndpoint = require('./routes/things');
const borrowersEndpoint = require('./routes/borrowers');

router.use(authenticateTokenMiddleware);
router.use('/things', thingsEndpoint);
router.use('/borrowers', borrowersEndpoint);

module.exports = router;