const express = require('express');
const router = express.Router();
const thingsEndpoint = require('./routes/things');

router.use('/things', thingsEndpoint);

module.exports = router;