const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'blog title must be provided'],
        maxlength: [100, 'blog title cannot be more than 100 characters']
    },
    snippet: {
        type: String,
        required: [true, 'blog snippet must be provided'],
        maxlength: [200, 'blog snippet cannot be more than 200 characters']
    },
    body: {
        type: String,
        required: [true, 'blog body must be provided']
    },
    BloggersId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blogger',
        required: true
    }, 
    Image: {
        name: String,
        url: String
    }
})

module.exports = mongoose.model('Blog', blogSchema)