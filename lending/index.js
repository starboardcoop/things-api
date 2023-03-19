const express = require('express');
const router = express.Router();
const authenticateTokenMiddleware = require('../auth/middleware/authenticateToken');
const thingsEndpoint = require('./routes/things');
const borrowersEndpoint = require('./routes/borrowers');
const loansEndpoint = require('./routes/loans');

router.use(authenticateTokenMiddleware);
router.use('/things', thingsEndpoint);
router.use('/borrowers', borrowersEndpoint);
router.use('/loans', loansEndpoint);

module.exports = router;
