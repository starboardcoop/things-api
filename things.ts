
const allThings = [
    {
        id: 0,
        name: 'Projector',
        category: 'entertainment',
        quantity: 1,
        available: 1
    },
    {
        id: 1,
        name: '10-foot Ladder',
        category: 'DIY',
        quantity: 2,
        available: 1
    },
    {
        id: 2,
        name: 'Impact Gun',
        category: 'DIY',
        quantity: 2,
        available: 0
    }
];

function all(): any {
    return {
        things: allThings
    };
}

function allAvailable(): any {
    return {
        things: allThings.filter((t) => t.available > 0)
    };
}

function get(id: any): any {
    const results: Array<any> = allThings.filter((t) => t.id == id);
    return {
        thing: results[0]
    };
}

export {
    all,
    allAvailable,
    get
};