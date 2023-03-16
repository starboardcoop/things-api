const { tokens } = require('../store');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    
    if (!Object.keys(tokens).includes(token)) {
        res.status(401).send();
    } else {
        next();
    }
}

module.exports = authenticateToken;