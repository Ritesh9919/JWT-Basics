const CustomApiError = require('../error/customApiError');
const {StatusCodes} = require('http-status-codes');

class BadRequestError extends CustomApiError{
    constructor(statusCode, message) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}


module.exports = BadRequestError;