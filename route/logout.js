const route = require("express").Router()

route.get("/logout", async(req,res)=>{
    try {
        // res.status(200).cookie("token", null, {expires: new Date(Date.now()), httpOnly:true})
        // .json({
        //     status:"success",
        //     message:"logged out"
        // })
        res.json({
            status:"success"
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

module.exports = route