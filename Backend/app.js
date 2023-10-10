const express = require('express')
const cookieParser = require('cookie-parser');
require("express-async-wrapper");
const UserRouter = require('./routes/userRoutes')
const BlogRouter = require('./routes/blogRoutes')
const eventRouter = require('./routes/eventsRoute')
const app = express();

app.use(cookieParser());
app.use("/api/v1",UserRouter);
app.use("/api/v1",BlogRouter)
app.use("/api/v1",eventRouter)


module.exports = app