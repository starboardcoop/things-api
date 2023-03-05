const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(process.env.AIRTABLE_BASE_ID);

const Table = {
    Inventory: 'Inventory',
    Borrowers: 'Members'
}

module.exports = {
    Table,
    base
};