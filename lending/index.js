const express = require('express');
const router = express.Router();
const thingsEndpoint = require('./routes/things');
const borrowersEndpoint = require('./routes/borrowers');

router.use('/things', thingsEndpoint);
router.use('/borrowers', borrowersEndpoint);

module.exports = router;