const { base, Table } = require('../db');

const loans = base(Table.Loans);

const mapLoan = (loan, thingId) => {
    const thingNames = loan.get('Borrowed Things');
    const thingIndex = loan.get('Things').indexOf(thingId);
    const thingNumber = loan.get('thing_numbers')[thingIndex];

    return {
        id: loan.id,
        number: Number(loan.get('Loan')),
        borrower: {
            id: loan.get('Borrower')[0],
            name: loan.get('Borrower Name')[0]
        },
        thing: {
            id: thingId,
            number: Number(thingNumber),
            name: thingNames[thingIndex]
        },
        checkedOutDate: loan.get('Checked Out'),
        checkedInDate: loan.get('checked_in_date'),
        dueBackDate: loan.get('Due Back')
    };
};

const fetchLoans = async ({ includeClosed }) => {
    const view = includeClosed ? 'api_all_loans' : 'api_open_loans';
    const results = await loans.select({
        view: view,
        fields: ['Loan', 'Borrower', 'Borrower Name', 'Things', 'Borrowed Things', 'Checked Out', 'checked_in_date', 'Due Back', 'thing_numbers'],
        pageSize: 100
    }).all();

    const fetchedLoans = [];

    // Because of the Airtable schema, we have to map each record to multiple loans, one for each thing
    results.forEach(r => {
        r.get('Things').forEach(thingId => fetchedLoans.push(mapLoan(r, thingId)));
    });

    return fetchedLoans;
};

const fetchLoan = async ({ loanId, thingId }) => {
    const loan = await loans.find(loanId);
    return loan ? mapLoan(loan, thingId) : null;
};

const createLoan = async ({
    borrowerId,
    thingIds,
    checkedOutDate,
    dueBackDate,
    notes
}) => {
    await loans.create([
        {
            "fields": {
              "Borrower": [borrowerId],
              "Things": thingIds,
              "Checked Out": checkedOutDate,
              "Due Back": dueBackDate,
              "Status": "Active",
              "Returned Things": [],
              "Notes": notes ?? "This loan was opened by the PVD Things API."
            }
        }
    ]);
};

module.exports = {
    fetchLoans,
    fetchLoan,
    createLoan
};