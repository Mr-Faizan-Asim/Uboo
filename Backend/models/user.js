const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: [20, 'Name cannot be more than 20 characters']
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password cannot be less than 8 characters'],
        select: false
    },
    blocked: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('User', userSchema)