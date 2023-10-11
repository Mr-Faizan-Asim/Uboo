const express = require('express')
require('express-async-wrapper')
const cookieParser = require('cookie-parser');
require("express-async-wrapper");
const UserRouter = require('./routes/userRoutes')
const BlogRouter = require('./routes/blogRoutes')
const eventRouter = require('./routes/eventsRoute')
const NotFoundMiddleware = require('./middleware/notFoundMiddleware')
const errorHandlerMiddleware = require('./middleware/errorHandler')

const app = express();

app.use(cookieParser());
app.use(express.json());


app.use("/api/v1/",UserRouter);
app.use("/api/v1/",BlogRouter)
app.use("/api/v1", eventRouter)

app.use(NotFoundMiddleware)

app.use(errorHandlerMiddleware)

// app.use((err, req, res, next) => {
//     var l = process.once('unhandledRejection', (err) => {
//         console.log(`Error: ${err.message}`);
//         res.status(500).json({ msg: err.message })
//     })
//     next()
//     process.removeEventLister('unhandledRejection', l);
// })

module.exports = app