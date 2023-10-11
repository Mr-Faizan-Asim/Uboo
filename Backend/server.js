const app = require('./app.js')
require('dotenv').config({path:'backend/config/config.env'})
const connectDatabase = require('./db/db.js');

connectDatabase(process.env.DB_URL);

const server = () => {
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server is at http://localhost:${process.env.PORT}`)
    })
}

server();
