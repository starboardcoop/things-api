const { fetchThings } = require('../../services/inventory');

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send(await fetchThings());
});

module.exports = router;