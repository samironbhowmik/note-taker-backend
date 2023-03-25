const mongoose = require("mongoose")

const connectDB = ()=>{
    mongoose.connect(process.env.DATABASE).then(()=>{
        console.log("Database is connected");
    })
}
module.exports = connectDB;