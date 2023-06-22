const { base, Table } = require('../db');

const things = base(Table.Things);
const inventory = base(Table.Inventory);

const mapItem = (record) => {
    return {
        id: record.id,
        number: Number(record.get('ID')),
        name: record.get('Name')[0],
        available: record.get('Active Loans') === 0
    };
}

const mapThing = (record) => {
    return {
        id: record.id,
        name: record.get('Name'),
        name_es: record.get('name_es'),
        stock: Number(record.get('Stock')),
        available: Number(record.get('Available'))
    };
}

const fetchInventory = async () => {
    const records = await inventory.select({
        view: 'api_fetch_things',
        fields: ['ID', 'Name', 'Active Loans'],
        pageSize: 100
    }).all();

    return records.map((r) => mapItem(r));
}

const fetchInventoryItem = async ({ id }) => {
    const records = await inventory.select({
        view: 'api_fetch_things',
        fields: ['ID', 'Name', 'Active Loans'],
        filterByFormula: `{ID} = '${id}'`,
        pageSize: 100
    }).all();

    return mapItem(records[0]);
}

const fetchThings = async () => {
    const records = await things.select({
        view: 'api_by_name',
        fields: ['Name', 'name_es', 'Stock', 'Available'],
        pageSize: 100
    }).all();

    return records.map(mapThing);
}

const fetchThing = async ({ id }) => {
    const record = await things.find(id);
    return record ? mapThing(record) : null;
}

module.exports = {
    fetchInventory,
    fetchInventoryItem,
    fetchThings,
    fetchThing
};