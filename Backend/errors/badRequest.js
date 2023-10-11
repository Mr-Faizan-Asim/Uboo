const  CustomError  = require('./customError')
const { StatusCodes } = require('http-status-codes')    

class BadRequest extends CustomError {
    constructor(message){
        super(message, StatusCodes.BAD_REQUEST)
    }
}

module.exports = BadRequest;