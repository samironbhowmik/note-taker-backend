const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    title:String,
    description:String,
    month:String,
    year:String,
    date:String,
    time:String
})

const noteModel = mongoose.model("noteModel", noteSchema)
module.exports = noteModel