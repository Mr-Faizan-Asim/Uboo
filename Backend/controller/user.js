const User = require('../models/user')
const { StatusCodes } = require('http-status-codes')
const { NotFound } = require('../errors/index')

export const notFoundError = (id) => {
    return new NotFound(`No user with id : ${id}`)
}

// get all users
const getAllUsers = async (req, res) => { 
    const users = await User.find({})
    res.status(StatusCodes.OK).json({users})
}

// create a new user
const newUser = async (req, res) => {
    const user = await User.create(req.body)
    res.status(StatusCodes.ACCEPTED).json(user)
}

// get single user
const getSingleUser = async (req, res, next) => { 
    const user = await User.findById(req.params.id)
    if (!user) {
        return next(notFoundError(req.params.id))
    }
    res.status(StatusCodes.OK).json(user)
}

// update user
const updateUser = async (req, res, next) => { 
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true,runValidators:true})
    if (!user) {
        return next(notFoundError(req.params.id))
    }
    res.status(StatusCodes.OK).json({msg: `user with id : ${req.params.id} updated`, updatedUser: user})
}

// delete user
const deleteUser = async (req, res) => { 
    const user = await User.findByIdAndRemove(req.params.id)
    if (!user) {
        return next(notFoundError(req.params.id))
    }
    res.status(StatusCodes.OK).json({msg: `user with id : ${req.params.id} deleted`})
}

module.exports = {
    getAllUsers,
    newUser,
    getSingleUser,
    updateUser,
    deleteUser
}