const express = require('express')
const cookieParser = require('cookie-parser');
require("express-async-wrapper");
const UserRouter = require('./routes/userRoutes')
const app = express();

app.use(cookieParser());
app.use("/api/v1",UserRouter);


module.exports = app