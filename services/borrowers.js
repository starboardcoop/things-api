const { base, Table, BorrowerIssue } = require('../db');

const borrowers = base(Table.Borrowers);

const mapBorrower = (record) => {
    return {
        id: record.id,
        name: record.get('Name'),
        contact: {
            email: record.get('Email'),
            phone: record.get('Phone')
        },
        issues: mapIssues(record)
    }
}

const mapIssues = (record) => {
    const issues = [];
    if (!record.get('Dues Paid')) issues.push(BorrowerIssue.DuesNotPaid);
    if (record.get('Overdue Loans') > 0) issues.push(BorrowerIssue.OverdueLoan);
    if (record.get('Suspended')) issues.push(BorrowerIssue.Suspended);

    return issues;
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

const fetchBorrower = async ({ id }) => {
    const record = await borrowers.find(id);
    return mapBorrower(record);
}

module.exports = {
    fetchBorrowers,
    fetchBorrower
};