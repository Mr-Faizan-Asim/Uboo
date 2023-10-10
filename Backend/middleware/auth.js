const jwt = require("jsonwebtoken");

exports.isAuthenticatedUser = (async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token)
    {
        return  res.status(404).send("Please Login");
    }
    const decodes = jwt.verify(token,"KazimFaizan");
    req.user = await User.findById(decodes.id);
    next();
});

exports.authorizeRole = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role))
        {
            return next(res.status(200).send("NO user is here"))
        }
        next();
    }
}
