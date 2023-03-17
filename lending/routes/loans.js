const { fetchLoans, fetchLoan } = require('../../services/loans');

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

module.exports = router;