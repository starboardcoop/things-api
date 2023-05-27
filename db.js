const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(process.env.AIRTABLE_BASE_ID);

const Table = {
    Inventory: 'Inventory',
    Borrowers: 'Members',
    Loans: 'Loans'
};

const BorrowerIssue = {
    DuesNotPaid: 'duesNotPaid',
    OverdueLoan: 'overdueLoan',
    Suspended: 'suspended',
    NeedsLiabilityWaiver: 'needsLiabilityWaiver'
};

module.exports = {
    Table,
    base,
    BorrowerIssue
};