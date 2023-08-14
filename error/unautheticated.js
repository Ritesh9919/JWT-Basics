const CustomApiError = require('../error/customApiError');
const {StatusCodes} = require('http-status-codes');


class UnauthenticatedError extends CustomApiError{
    constructor(statusCode, message) {
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}


module.exports = UnauthenticatedError;