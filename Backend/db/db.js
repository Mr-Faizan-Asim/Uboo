const mongoose = require("mongoose");

const connectDatabase = (url) => {
    mongoose.connect(url)
.then(()=>{
console.log("mongodb is connected")
})
    .catch((err) => { console.log(err) })

}
module.exports = connectDatabase;