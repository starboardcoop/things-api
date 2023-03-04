const { things } = require('../db');

const mapThing = (record) => {
    return {
        id: record.get('ID'),
        name: record.get('Name')[0],
        available: record.get('Active Loans') === 0
    };
}

const fetchThings = async () => {
    const records = await things.select({
        view: 'api_fetch_things',
        fields: ['ID', 'Name', 'Active Loans'],
        pageSize: 100
    })
    .all();

    return records.map((r) => mapThing(r));
}

module.exports = {
    fetchThings
};