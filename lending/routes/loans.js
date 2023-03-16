const { fetchLoans } = require('../../services/loans');

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const includeClosedLoans = req.query['closed'];
    res.send(await fetchLoans({ includeClosed: includeClosedLoans}));
});

// router.get('/:id', async (req, res) => {
//     try {
//         res.send(await fetchThing({ id: req.params.id }));
//     } catch (error) {
//         res.status(404).send({ errors: [error] });
//     }
// });

module.exports = router;