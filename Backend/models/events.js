const { kMaxLength } = require('buffer')
const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    images:
    [{
    url:{
        type:String,
        required:[true,"Please Enter URL"]
    },
    discription:{
        type:String,
        required:[true,"Please Enter discription"]
        
    }
    }],
})

module.exports = mongoose.model('event', EventSchema)