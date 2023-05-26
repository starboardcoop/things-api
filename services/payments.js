const { base, Table } = require('../db');

const payments = base(Table.Payments);

const recordCashPayment = async ({
    borrowerId,
    cash
}) => {
    const today = new Date(Date.now());
    const payment = await payments.create({
        "member": [borrowerId],
        "date": today.toISOString(),
        cash
    });

    return payment.id;
};

module.exports = {
    recordCashPayment
};