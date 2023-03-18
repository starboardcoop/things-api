const { isAuthorized } = require('../index');

const authenticateToken = (req, res, next) => {
    const environment = process.env.NODE_ENV || 'development';

    if (environment === 'development') {
        next();
        return;
    }

    const token = req.headers['authorization'];
    
    if (!isAuthorized(token)) {
        res.status(401).send();
    } else {
        next();
    }
}

module.exports = authenticateToken;