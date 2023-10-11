const CustomError = require('./customError')
const { StatusCodes } = require('http-status-codes')  

class Unauthorized extends CustomError { 
    constructor(message){
        super(message, StatusCodes.UNAUTHORIZED)
    }
}

module.exports = Unauthorized;