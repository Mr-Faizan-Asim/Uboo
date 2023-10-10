const Event = require("../models/events.js")
const { StatusCodes } = require('http-status-codes')
const notFoundError = require('./user.js')

const getAllEvent = async (req,res) => {
    const events = await Event.find({})
    res.status(StatusCodes.OK).json({events})
}

const newEvent = async (req, res) => {
    const event = await Event.create(req.body)
    res.status(StatusCodes.ACCEPTED).json(event)
}
const deleteEvent = async (req, res) => { 
    const event = await Event.findByIdAndRemove(req.params.id)
    if (!event) {
        return next(notFoundError(req.params.id))
    }
    res.status(StatusCodes.OK).send("Event is deleted")
}

module.exports = {
    newEvent,
    getAllEvent,
    deleteEvent,
}