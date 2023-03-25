const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./connect/connectDB")
const signin_signup = require("./route/signin_signup")
const notes = require("./route/notes")
const cors = require("cors")
const logout = require("./route/logout")

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())
app.use("/", signin_signup)
app.use("/",notes)
app.use("/",logout)


app.listen(process.env.PORT, async(req,res)=>{
    connectDB()
    console.log(`App is conneted at port ${process.env.PORT}`);
})