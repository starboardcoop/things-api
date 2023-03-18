const { fetchLoans, fetchLoan, createLoan } = require('../../services/loans');

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const includeClosedLoans = req.query['closed'];
    res.send(await fetchLoans({ includeClosed: includeClosedLoans}));
});

router.get('/:loanId/:thingId', async (req, res) => {
    const loan = await fetchLoan({ loanId: req.params.loanId, thingId: req.params.thingId });
    if (loan) {
        res.send(loan);
    } else {
        res.status(404).send();
    }
});

router.post('/', async (req, res) => {
    try {
        await createLoan(req.body);
        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

module.exports = router;