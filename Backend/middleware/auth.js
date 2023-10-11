const jwt = require("jsonwebtoken");
const { Unauthorized, BadRequest } = require('../errors/index')
const { StatusCodes } = require("http-status-codes");


exports.isAuthenticatedUser = (async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token)
    {
        throw new BadRequest("Login first to access this resource");
    }
    const decodes = jwt.verify(token,"KazimFaizan");
    req.user = await User.findById(decodes.id);
    next();
});

exports.authorizeRole = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role))
        {
            throw new Unauthorized(`Role (${req.user.role}) is not allowed to access this resource`);
        }
        next();
    }
}

