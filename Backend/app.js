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

// TO-DO
// event can get created without entering any image urls
// it is not catching model validation errors

module.exports = app