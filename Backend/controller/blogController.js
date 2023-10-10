const Blog = require("../models/blogs.js")
const { StatusCodes } = require('http-status-codes')
const notFoundError = require('./user.js')


const getAllBlog = async (req,res) => {
    const blogs = await Blog.find({})
    res.status(StatusCodes.OK).json({blogs})
}

const newBlog = async (req, res) => {
    const blog = await Blog.create(req.body)
    res.status(StatusCodes.ACCEPTED).json(blog)
}

const getSingleBlog = async (req, res, next) => { 
    const blog = await Blog.findById(req.params.id)
    if (!blog) {
        return next(notFoundError(req.params.id))
    }
    res.status(StatusCodes.OK).json(blog)
}

const updateBlog = async (req, res, next) => { 
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {new:true,runValidators:true})
    if (!blog) {
        return next(notFoundError(req.params.id))
    }
    res.status(StatusCodes.OK).send("Updated")
}

const deleteBlog = async (req, res) => { 
    const blog = await Blog.findByIdAndRemove(req.params.id)
    if (!blog) {
        return next(notFoundError(req.params.id))
    }
    res.status(StatusCodes.OK).send("Deleted")
}
module.exports = {
    updateBlog,
    getSingleBlog,
    newBlog,
    getAllBlog,
    deleteBlog,

}