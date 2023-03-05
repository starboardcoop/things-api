const { fetchBorrowers } = require('../../services/borrowers');

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send(await fetchBorrowers());
});

module.exports = router;