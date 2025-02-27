const CustomError  = require('./customError')
const {StatusCodes} = require('http-status-codes')

class NotFound extends CustomError{
    constructor(message){
        super(message, StatusCodes.NOT_FOUND)
    }
}

module.exports =  NotFound;