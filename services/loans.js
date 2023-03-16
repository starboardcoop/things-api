const { base, Table } = require('../db');

const loans = base(Table.Loans);

const fetchLoans = async ({ includeClosed }) => {
    const view = includeClosed ? 'api_all_loans' : 'api_open_loans';
    const results = await loans.select({
        view: view,
        fields: ['Borrower', 'Borrower Name', 'Things', 'Borrowed Things', 'Checked Out', 'checked_in_date', 'Due Back', 'Status'],
        pageSize: 100
    }).all();

    const fetchedLoans = [];

    // Because of the Airtable schema, we have to map each record to multiple loans, one for each thing
    results.forEach(r => {
        const borrower = {
            id: r.get('Borrower')[0],
            name: r.get('Borrower Name')[0]
        };

        const borrowedThingNames = r.get('Borrowed Things');

        r.get('Things').forEach((thingId, index) => {
            fetchedLoans.push({
                id: r.id,
                borrower,
                thing: {
                    id: thingId,
                    name: borrowedThingNames[index]
                }
            });
        });
    });

    return fetchedLoans;
};

module.exports = {
    fetchLoans
};