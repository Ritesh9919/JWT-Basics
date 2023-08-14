const {UnauthenticatedError} = require('../error');
const jwt = require('jsonwebtoken');


module.exports.authentication = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('token is not present');
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {id, name} = decoded;
        req.user = {id, name};
        next();
    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this token');
    }
}