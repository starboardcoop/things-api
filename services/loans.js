const fetchLoans = async () => {
    return [
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
};

module.exports = {
    fetchLoans
};