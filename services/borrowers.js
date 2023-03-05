const { base, Table } = require('../db');

const borrowers = base(Table.Borrowers);

const mapBorrower = (record) => {
    return {
        name: record.get('Name'),
        contact: {
            email: record.get('Email'),
            phone: record.get('Phone')
        },
        issues: []
    }
}

const fetchBorrowers = async () => {
    const records = await borrowers.select({
        view: 'api',
        fields: [
            'Name',
            'Email',
            'Phone',
            'Active', 
            'Suspended', 
            'Overdue Loans', 
            'Dues Paid'
        ],
        pageSize: 100
    }).all();

    return records.map(mapBorrower);
}

module.exports = {
    fetchBorrowers
};