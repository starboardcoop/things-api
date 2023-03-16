const fetchLoans = async ({ includeClosed }) => {
    const loans = [
        {
            id: 'string',
            borrower: {
                id: 'id',
                name: 'name'
            },
            thing: {
                id: 'id',
                name: 'name'
            },
            checkedOutDate: '',
            checkedInDate: '',
            dueDate: ''
        }
    ];

    if (includeClosed) loans.push({
        id: 'string',
        borrower: {
            id: 'id',
            name: 'name'
        },
        thing: {
            id: 'id',
            name: 'name'
        },
        checkedOutDate: '',
        checkedInDate: '',
        dueDate: ''
    });

    return loans;
};

module.exports = {
    fetchLoans
};