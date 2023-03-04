const { fetchThings, fetchThing } = require('../../services/inventory');

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send(await fetchThings());
});

router.get('/:id', async (req, res) => {
    try {
        res.send(await fetchThing({ airtableId: req.params.id }));
    } catch (error) {
        res.status(404).send({ errors: [error] });
    }
});

module.exports = router;