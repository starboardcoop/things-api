const { tokens } = require('./store');

const authorize = (token) => {
    tokens[token] = {
        valid: true
    };
};

const isAuthorized = (token) => {
    return Object.keys(tokens).includes(token);
};

module.exports = {
    authorize,
    isAuthorized
};