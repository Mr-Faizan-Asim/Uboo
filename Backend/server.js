const app = require('./app.js')
const dotenv = require('dotenv')
const connectDatabase = require('./db/db.js');

dotenv.config();
connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is at http://localhost:${process.env.PORT}`)
})


